export const priceLoader = async({params}) => {
    const symbol = params.symbol;
    const apiKey = "224d3ba0da953f4ed257315733c21ee9"

    return (await fetch(`https://financialmodelingprep.com/api/v3/stock-price-change/${symbol}?apikey=${apiKey}`)
}
