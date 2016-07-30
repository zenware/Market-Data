CREATE SEQUENCE id_sequence;
CREATE OR REPLACE FUNCTION id_generator(
    out new_id bigint
) AS $$
DECLARE
    our_epoch bigint := 1072915200000;
    seq_id bigint;
    now_ms bigint;
    shard_id int := 1;
BEGIN
    SELECT NEXTVAL('id_sequence') % 1024 INTO seq_id;
    SELECT FLOOR(EXTRACT(EPOCH FROM now()) * 1000) INTO now_ms;
    new_id := (now_ms - our_epoch) << 23;
    new_id := new_id | (shard_id << 10);
    new_id := new_id | (seq_id);
END;
$$
LANGUAGE PLPGSQL;

CREATE TABLE users (
    id BIGINT PRIMARY KEY NOT NULL DEFAULT id_generator(),
    username VARCHAR(35) UNIQUE NOT NULL,
    first_name VARCHAR(155),
    last_name VARCHAR(155),
    birth_date TIMESTAMP DEFAULT NULL,
    email VARCHAR(55) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL,
    date_updated TIMESTAMP DEFAULT now() NOT NULL,
    date_deleted TIMESTAMP DEFAULT NULL,
    status VARCHAR(10) DEFAULT 'active'
);

CREATE TABLE user_sessions (
    session_key TEXT PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) NOT NULL,
    login_time TIMESTAMP NOT NULL,
    last_seen_time TIMESTAMP NOT NULL
);

CREATE TABLE portfolios (
    id BIGINT PRIMARY KEY NOT NULL DEFAULT id_generator(),
    user_id BIGINT REFERENCES users(id) NOT NULL,
    name VARCHAR(25) DEFAULT 'Portfolio',
    funds DECIMAL DEFAULT 100000,
    date_created TIMESTAMP DEFAULT now(),
    date_updated TIMESTAMP DEFAULT now(),
    date_deleted TIMESTAMP DEFAULT NULL,
    status VARCHAR(10) DEFAULT 'active'
);

CREATE TABLE stocks (
    id BIGINT PRIMARY KEY NOT NULL DEFAULT id_generator(),
    user_id BIGINT REFERENCES users(id) NOT NULL,
    portfolio_id BIGINT REFERENCES portfolios(id) NOT NULL,
    symbol VARCHAR(20) NOT NULL,
    shares INTEGER DEFAULT 0,
    date_created TIMESTAMP DEFAULT now(),
    date_updated TIMESTAMP DEFAULT now(),
    date_deleted TIMESTAMP DEFAULT NULL
);

CREATE TABLE stock_transactions (
    id BIGINT PRIMARY KEY NOT NULL DEFAULT id_generator(),
    user_id BIGINT REFERENCES users(id) NOT NULL,
    portfolio_id BIGINT REFERENCES portfolios(id) NOT NULL,
    stock_id BIGINT REFERENCES stocks(id) NOT NULL,
    buy_date TIMESTAMP,
    sell_date TIMESTAMP,
    buy_price DECIMAL,
    sell_price DECIMAL
);
