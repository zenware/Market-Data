# Market Data

## Front-End Development Environment Setup

1. Make sure you have at least Node v6+
2. Run `npm install`
3. Run `npm run development` for the dev environment
4. Run `npm run production` to generate a static file build in the `/static` directory
5. `npm test` to run unit tests (which aren't set up yet)

## Back-End Development Environment Setup

1. Download Vagrant: https://www.vagrantup.com/downloads.html
2. Run `vagrant up` within the project's root directory
3. Run `vagrant provision` to run the provision script again ONLY if you have modified it
4. Run `vagrant ssh`
5. While in your virtual box, run `‘sudo -i -u postgres`
6. Paste `export PGUSER=$USER; export PGPASSWORD=$PASSWORD;`, where both `$USER` & `$PASSWORD` denote the generated values given to you by the provision script
7. Run `psql -h localhost marketdata_dev`
8. Create your own `config.json` file with the following format:
```json
{
    "knex" : {
        "client": "pg",
        "connection": {
            "host": "127.0.0.1",
            "port": "15432",
            "user": "$USER",
            "password": "$PASSWORD",
            "database": "marketdata_dev",
            "charset": "UTF8"
        }
    }
}
```
9. Hack the planet
