import React, {Component, StrictMode} from "react";
import CurrencyInput from "./components/currencyInput";

class App extends Component {

  state = {
    from: "USD",
    to: "INR",
    rate: 1
  }

  render() {
    return (
      <div className="currency-converter">
        <StrictMode>
          <CurrencyInput symbol={this.state.from} selectSymbol={sym => this.setState({from: sym})}/>
          <CurrencyInput symbol={this.state.to} selectSymbol={sym => this.setState({to: sym})}/>
        </StrictMode>
      </div>
    )
  }
}

export default App;
