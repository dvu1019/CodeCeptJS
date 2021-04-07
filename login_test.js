Feature('login');

const correctUser = 'david@testing.com'
const correctUserPass = 'Foobar1019@@'
const incorrectUser = 'david123@test.com'
const incorrectUserPass = 'Abcd1234@@'
const usedPhoneNumber='17142222222'
const newNumber = '1714'+ (Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000)

Scenario('Successful Login - close join circle modal', ({ I }) => {
//Runs through login test while closing the "join circle modal"
    I.amOnPage('https://www.momenthouse.com/sign-in')
    I.see('Sign in', 'h2')
    //Used locator type here 
    I.fillField('input[type=email]', correctUser)
    //Used semantic locator here 
    I.fillField('password', correctUserPass)
    I.click('button[type=submit]')

    //If statement here to close out "join circle modal" if one populates
    if (I.see('Join Inner Circle')) {
        I.click('.icon-close')
        I.click('Continue')
        I.see('Tickets', 'h4')
    } else {
    I.see('Tickets', 'h4')
    }
});

Scenario('Successful Login with new phonenumber', ({ I }) => {
//Runs through login test with random new phone number to pass "join circle modal"
    I.amOnPage('https://www.momenthouse.com/sign-in')
    I.see('Sign in', 'h2')
    I.fillField('input[type=email]', correctUser)
    I.fillField('password', correctUserPass)
    I.click('button[type=submit]')
    //If statement here to close out "join circle modal" if one populates
    if (I.see('Join Inner Circle')) {
        I.fillField('input[type=tel]',newNumber)
        I.click('Submit')
        I.click('Close')
        I.click('Continue')
        I.see('Tickets', 'h4')
    } else {
    I.see('Tickets', 'h4')
    }
});

Scenario('Successful Login with used phonenumber', ({ I }) => {
// Runs through login test with number already used to "Join Circle"    
    I.amOnPage('https://www.momenthouse.com/sign-in')
    I.see('Sign in', 'h2')
    I.fillField('input[type=email]', correctUser)
    I.fillField('password', correctUserPass)
    I.click('button[type=submit]')
    //If statement here to close out "join circle modal" if one populates
    if (I.see('Join Inner Circle')) {
        I.fillField('input[type=tel]',usedPhoneNumber)
        I.click('Submit')
        I.see('You are already an Inner Circle member', 'p')
        I.click('Continue')
        I.see('Tickets', 'h4')
    } else {
    I.see('Tickets', 'h4')
    }
});

Scenario('UnSuccessful Login with incorrect email', ({ I }) => {
    I.amOnPage('https://www.momenthouse.com/sign-in')
    I.see('Sign in', 'h2')
    I.fillField('email', incorrectUser)
    I.fillField('password', incorrectUserPass)
    I.click('Continue')
    I.see('Account does not exist.', 'p')
    });

Scenario('UnSuccessful Login with incorrect password', ({ I }) => {
    I.amOnPage('https://www.momenthouse.com/sign-in')
    I.see('Sign in', 'h2')
    I.fillField('email', correctUser)
    I.fillField('password', incorrectUserPass)
    I.click('Continue')
    I.see('Incorrect email / password', 'p')
    });



