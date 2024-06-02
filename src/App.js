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
