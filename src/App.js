import React, {Component, StrictMode} from "react";
import CurrencyInput from "./components/CurrencyInput";
import exchangeRates from "./services/exchangeRates";

class App extends Component {

  state = {
    from: "USD",
    to: "INR",
    rate: 1,
    fromAmt: 0,
    toAmt: 0
  }

  componentDidMount = () => {
    this.fetchRates(this.state.from, this.state.to)
  }

  componentDidUpdate = (_, prevState) => {
    if(prevState.from !== this.state.from || prevState.to !== this.state.to){
      this.fetchRates(this.state.from, this.state.to)
    }
  }

  fetchRates = async (base = "USD", symbol = "INR") => {
    const {rate} = await exchangeRates(base, symbol)
    this.setState({
      rate
    })
  }

  computeAmount = (key) => {
    let {fromAmt, toAmt} = this.state

    if(fromAmt !== null)
      toAmt = parseFloat(this.state.fromAmt * this.state.rate).toFixed(2)
    else 
      fromAmt = parseFloat(this.state.toAmt / this.state.rate).toFixed(2)

    return key === "from" ? fromAmt : toAmt
  }

  setAmount = (amt, field) => {
    if(field === "from") {
      this.setState({
        fromAmt: amt,
        toAmt: null
      })
    }
    else {
      this.setState({
        fromAmt: null,
        toAmt: amt
      })
    }
  }
  render() {
    return (
      <div className="currency-converter">
        <StrictMode>
          <CurrencyInput 
            symbol={this.state.from} 
            selectSymbol={sym => this.setState({from: sym})}
            selectAmount={amt => this.setAmount(amt, "from")}
            amount={this.computeAmount("from")}
          />
          <CurrencyInput 
            symbol={this.state.to} 
            selectSymbol={sym => this.setState({to: sym})}
            selectAmount={amt => this.setAmount(amt, "to")}
            amount={this.computeAmount("to")}
          />
        </StrictMode>
      </div>
    )
  }
}

export default App;
