import React from "react";

const CurrencyInput = () => {
  return (
    <>
      <div className="field">
        <div className="currency-picker">
          <select>
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
            <option>SGD</option>
            <option>GBP</option>
            <option>CAD</option>
            <option>AUD</option>
            <option>CNY</option>
            <option>JPY</option>
            <option>NZD</option>
          </select>
        </div>
        <div className="currency-input">
          <input 
            type="number"
            className="number-input"
          />
        </div>
      </div>
    </>
  )
}

export default CurrencyInput