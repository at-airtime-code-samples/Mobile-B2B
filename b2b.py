import africastalking

africastalking.initialize(username="", api_key="")

payment = africastalking.Payment

product_name = ""

business = {
    "provider": provider,
    # Set the destination channel and destination account
	"destinationChannel": "partnerBusinessChannel",
    "destinationAccount": "partnerBusinessChannelAccount",
	# Set the transfer type
    "transferType": "BusinessToBusinessTransfer",
    # Set The 3-Letter ISO currency code and the checkout amount
    "currencyCode": currency_code,
    "amount": amount,
    # Set any metadata that you would like to send along with this request.
    # This metadata will be included when we send back the final payment notification
    "metadata": {
        "shopId" => "1234",
        "itemId" => "abcde"
    }

}

try:
    res = payment.mobile_b2b(product_name, business)
    print(res)
except Exception as e:
    print(f"Houston we have a problem: {e}")
