import React, {Component} from "react";
import CurrencyInput from "./components/currencyInput";

class App extends Component {

  state = {
    from: "USD",
    to: "INR",
    rate: 1
  }

  render() {
    return <div className="currency-converter">
       <CurrencyInput />
       <CurrencyInput />
    </div>;
  }
}

export default App;
