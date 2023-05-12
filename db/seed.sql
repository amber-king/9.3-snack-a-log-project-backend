\c snacks_dev;

INSERT INTO
    snacks(
        snack_name,
        time_eaten,
        food_group,
        is_healthy,
        calorie_count,
        quantity
    )
VALUES
    (
        'Popcorn',
        'Evening',
        'Grain',
        true,
        '106',
        'one bag'
    ),
    (
        'Chips',
        'Afternoon',
        'Snack',
        false,
        '152',
        'half bag'
    ),
    (
        'Avocados',
        'Afternoon',
        'Vegetable',
        true,
        '240',
        'half'
    ),
    (
        'Poptarts',
        'Evening',
        'Snack',
        false,
        '200',
        'two'
    ),
    (
        'Greek Yogurt',
        'Morning',
        'Dairy',
        true,
        '100',
        'one cup'
    );