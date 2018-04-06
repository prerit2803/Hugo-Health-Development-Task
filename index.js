const CoinMarketCap = require('coinmarketcap-api')

const client = new CoinMarketCap()
const args = process.argv;
// console.log("args",args[2]);
var cryptoCurrency = args[2];
if(cryptoCurrency){
  client.getTicker({limit: 1, currency: `${cryptoCurrency}`}).then(function(response){
    // console.log("resp", response);
    if(response.error){
      console.error("Please run the program with valid crypto currency name: ", "docker run -e \"cryptoCurrencyName=<VALID-CRYPTO-CURRENCY-NAME>\" -it <DOCKER-IMAGE-NAME>");
    }else{
      console.log(`${cryptoCurrency} Price: $` + response[0].price_usd, " Market Cap: $" + response[0].market_cap_usd)
    }
  }).catch(console.error)
}else{
  console.error("Please run the program with a crypto currency name: ", "docker run -e \"cryptoCurrencyName=<CRYPTO-CURRENCY-NAME>\" -it <DOCKER-IMAGE-NAME>");
}
