//Set up app credentials
const credentials = {
    apiKey: "YOUR_API_KEY_GOES_HERE",
    username: "YOUR_USERNAME_GOES_HERE"
}

//Initialize the AT SDK
const AfricasTalking = require("africastalking")(credentials)

//Call the Payments service
const payments = AfricasTalking.PAYMENTS

const initiateMobileB2B = async () => {
    
    
    const options = {
        //Set up the name of the AT Payment Product name
        productName: "PRODUCT_NAME",
        //Set up the payments provider
        provider: "PAYMENT_PROVIDER",
        //Set the destination channel and account
        destinationChannel: "partnerBusinessChannel",
        destinationAccount: "partnerAccountName",
        //Set the transer type
        transferType: "",
        //Set the 3-letter ISO currency code and amount
        currencyCode: "",
        amount: "",
        //Optional metadata 
        metadata: {
            foo: "bar",
            bar: "foo"
        }
    }

    //That's it. We'll take care of the rest
    try {
        const result = await payments.mobileB2B(options)
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}