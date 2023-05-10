DROP DATABASE IF EXISTS snacks_dev;

CREATE DATABASE snacks_dev;

\ c snacks_dev;

CREATE TABLE snacks (
    snack_id SERIAL PRIMARY KEY,
    snack_name TEXT NOT NULL,
    time_eaten TEXT,
    food_group TEXT,
    is_healthy BOOLEAN,
    calorie_count INT,
    quantity TEXT
);