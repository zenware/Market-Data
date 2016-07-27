#!/usr/bin/env bash

sudo apt-get update
# npm has a lot of dependencies, including 'nodejs'
sudo apt-get install -y npm

export DEBIAN_FRONTEND=noninteractive
PG_VERSION=9.4
sudo apt-get install -y postgresql-$PG_VERSION postgresql-contrib-$PG_VERSION

# Postgresql Configuration files
PG_CONF="/etc/postgresql/$PG_VERSION/main/postgresql.conf"
PG_HBA="/etc/postgresql/$PG_VERSION/main/pg_hba.conf"
PG_DIR="/var/lib/postgresql/$PG_VERSION/main"

# Edit postgresql.conf to change listen address to '*'
# This is important in case you need to access the DB from your host machine
sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/" "$PG_CONF"

# For some reason I couldn't get this working in a standard way
# It sets up that the db interaction will be in utf-8
# and HBA is short for 'host based authentication' so for development purposes
# every host is allowed to authenticate with the database
sudo bash -c "
cat << EOF >> $PG_CONF
client_encoding = utf8
EOF

cat << EOF >> $PG_HBA
host    all             all             all                     md5
EOF
"

# Load in the new config
sudo systemctl restart postgresql

# Some Sane Defaults for development
APP_DB_NAME=marketdata_dev
APP_DB_USER=marketdata
# Reproducible but not immediately readable password
APP_DB_PASS=$(date | shasum -p | awk '{print $1}')
# Create the DB_USER
sudo -u postgres psql -c "CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';"
# Create the DB
sudo -u postgres psql -c "CREATE DATABASE $APP_DB_NAME WITH OWNER=$APP_DB_USER LC_COLLATE='en_US.utf8' LC_CTYPE='en_US.utf8' ENCODING='UTF8' TEMPLATE=template0;"
# Give the user permissions to create new DB's (Might be needed for running tests)
sudo -u postgres psql -c "ALTER USER $APP_DB_USER CREATEDB;"

# Prepping the db with the schema
sudo -u postgres psql $APP_DB_NAME -f /vagrant/schema/schema.sql

echo "Your PostgreSQL database has been setup and can be accessed on your local machine on the forwarded port (default: 15432)"
echo "Host: localhost"
echo "Port: 15432"
printf "Database: $APP_DB_NAME\n  Username: $APP_DB_USER\n  Password: $APP_DB_PASS\n"
printf "Admin access to postgres user via VM:\n  vagrant ssh\n  sudo su - postgres\n"
printf "psql access to app database user via VM:\n  vagrant ssh\n  sudo su - postgres"
printf "  PGUSER=$APP_DB_USER PGPASSWORD=$APP_DB_PASS psql -h localhost $APP_DB_NAME\n"
echo "Env variable for application development:"
printf "  DATABASE_URL=postgresql://$APP_DB_USER:$APP_DB_PASS@localhost:15432/$APP_DB_NAME\n"
echo "Local command to access the database via psql:"
echo "  PGUSER=$APP_DB_USER PGPASSWORD=$APP_DB_PASS psql -h localhost -p 15432 $APP_DB_NAME"

