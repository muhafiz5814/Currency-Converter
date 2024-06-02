const exchangeRates = async (base, symbol) => {

  if(base === symbol){
    return Promise.resolve({rate: 1})
  } else {
    const url = `https://exchange-rate-api1.p.rapidapi.com/latest?base=${base}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return Promise.resolve({
        rate: result.rates[symbol]
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default exchangeRates;
