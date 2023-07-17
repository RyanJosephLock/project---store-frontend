CREATE TABLE products (
    name VARCHAR(255), 
    category VARCHAR(255),
    description TEXT,
    price INTEGER,
    discount INTEGER,
    image TEXT,
    id SERIAL PRIMARY KEY
    );
    
INSERT INTO products 
    (
        name, 
        category, 
        description, 
        price, 
        discount, 
        image
    )
VALUES 
    (
        'Product 1',
        'Category 1',
        'Mauris dignissim ante nunc, eu tempor nisl imperdiet id. Morbi vel euismod elit, sit amet laoreet nulla. Duis dictum sollicitudin purus. Sed rutrum maximus lobortis. Etiam suscipit augue nec felis rutrum, sed gravida libero finibus. In posuere ornare aliquam. Aliquam libero odio, dapibus at odio a, placerat commodo mi. Praesent ullamcorper augue in ante congue laoreet vitae eget turpis. Suspendisse id lobortis ex. Vestibulum eget lacinia diam.',
        43,
        0,
        'https://dummyimage.com/300x300/000/fff.png'
    ),
    (
        'Product 2',
        'Category 1',
        'Mauris dignissim ante nunc, eu tempor nisl imperdiet id. Morbi vel euismod elit, sit amet laoreet nulla. Duis dictum sollicitudin purus. Sed rutrum maximus lobortis. Etiam suscipit augue nec felis rutrum, sed gravida libero finibus. In posuere ornare aliquam. Aliquam libero odio, dapibus at odio a, placerat commodo mi. Praesent ullamcorper augue in ante congue laoreet vitae eget turpis. Suspendisse id lobortis ex. Vestibulum eget lacinia diam.',
        20,
        4,
        'https://dummyimage.com/300x300/000/fff.png'
    );

CREATE TABLE users (
    user_firstname VARCHAR(255), 
    user_lastname VARCHAR(255),
    user_password VARCHAR(255),
    id SERIAL PRIMARY KEY
    );

CREATE TABLE orders (
    user_id INTEGER,
    order_status VARCHAR(50),
    id SERIAL PRIMARY KEY
    );

CREATE TABLE order_products (
    product_quantity INTEGER,
    order_id INTEGER,
    product_id INTEGER,
    id SERIAL PRIMARY KEY
    );