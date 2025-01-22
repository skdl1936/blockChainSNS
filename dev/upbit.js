//업비트 현재가 가져오기
const request = require('request')

const server_url = "https://api.upbit.com"

const options = {
    method: "GET",
    url: server_url + "/v1/ticker",
    qs: {markets: "KRW-BTC,KRW-ETH,KRW-DOGE"}
}

// 현재가 가져오기
const getCurrentPrice = request(options, (error, response, body) => {
    if (error) throw new Error(error)
    const coins = JSON.parse(body)

    console.log(coins)
    const bitcoin = coins[0]
    const etc = coins[1]
    const doge = coins[2]

    console.log('비트코인: ', bitcoin.trade_price.toLocaleString(),'KRW')
    console.log('이더리움: ', etc.trade_price.toLocaleString(),'KRW')
    console.log('도지코인: ', doge.trade_price.toLocaleString(),'KRW')

    return {bitcoin, etc, doge}
})