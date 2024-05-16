# API endpoints



// signup
{
    "email": "test@test.com",
    "firstName": "john",
    "lastName": "doe",
    "password": "abcd1234.."
}

// login
{
    "email": "test@test.com",
    "password": "abcd1234.."
}

// remove account
-> localhost:3100/removeAccount
{
    "email": "test@test.com"
}

// forget password
-> localhost:3100/forgotPassword?serial=< your-id >

// forget password
-> localhost:3100/forgotPassword
{
    "serial":"94103101-c0a5-49be-a863-2d0401cb9467",
    "code":"5913879",
    "password": "Abcd1234.."
}

// active account
-> localhost:3100/activeAccount?serial=< your-id >

// deactive account
-> localhost:3100/deactiveAccount?serial=< your-id >
