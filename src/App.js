import React, {Component, StrictMode} from "react";
import CurrencyInput from "./components/currencyInput";

class App extends Component {

  state = {
    from: "USD",
    to: "INR",
    rate: 1,
    fromAmt: 0,
    toAmt: 0
  }

  componentDidMount = () => {
    this.fetchRate(this.state.from, this.state.to)
  }

  componentDidUpdate = (_, prevState) => {
    if(prevState.from !== this.state.from || prevState.to !== this.state.to){
      this.fetchRate(this.state.from, this.state.to)
    }
  }

  fetchRate = async (base = "USD", symbol = "INR") => {
    if(base === symbol){
      this.setState({ rate: 1})
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
        console.log(result.rates[symbol]);
        this.setState({
          rate: result.rates[symbol]
        })
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return (
      <div className="currency-converter">
        <StrictMode>
          <CurrencyInput 
            symbol={this.state.from} 
            selectSymbol={sym => this.setState({from: sym})}
            selectAmount={amt => this.setState({fromAmt: amt})}
            amount={this.state.fromAmt}
          />
          <CurrencyInput 
            symbol={this.state.to} 
            selectSymbol={sym => this.setState({to: sym})}
            selectAmount={amt => this.setState({toAmt: amt})}
            amount={parseFloat(this.state.fromAmt * this.state.rate).toFixed(2)}
          />
        </StrictMode>
      </div>
    )
  }
}

export default App;
