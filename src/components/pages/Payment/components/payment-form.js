import React, { Component } from "react";

// Import crad images
import defaultCard from "../../../../assets/credit-card.svg";
import visa from "../../../../assets/visa.svg";
import master from "../../../../assets/mastercard.svg";
import amex from "../../../../assets/amex.svg";
import disc from "../../../../assets/discover.svg";

// public\images\amex.svg

const divStyle = {
    width: "66%",
    margin: "auto"
  };
  
  // init state
  const initState = {
    name: "",
    cardno: "",
    month: "",
    year: "",
    csv: "",
    nameError: "",
    cardnoError: "",
    monthError: "",
    yearError: "",
    csvError: "",
    cardType: defaultCard,
    months: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ],
    years: [
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027"
    ]
  };
  
class PaymentForm extends Component {
    
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });

    if (this.state.cardno) {
      this.validateCreditCardNumber(this.state.cardno);
    }
  }

  handleFormSubmitEvent = () => {
    const isValid = this.validate();
    if (isValid) {
      this.setState(initState);
      this.props.history.push("/processing");
    }
  };

  // Validate the input name
  validateName = inputName => {
    // Regex to match name pattern
    const namePattern = /^[a-zA-Z\-'\s]+/;
    return namePattern.test(inputName) === true;
  };

  // Validate the credit card no
  validateCreditCardNumber = ccNum => {
    // Regex to match card type
    const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastPattern = /^(?:5[1-5][0-9]{14})$/;
    const amexPattern = /^(?:3[47][0-9]{13})$/;
    const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    const isVisa = visaPattern.test(ccNum) === true;
    const isMast = mastPattern.test(ccNum) === true;
    const isAmex = amexPattern.test(ccNum) === true;
    const isDisc = discPattern.test(ccNum) === true;

    if (isVisa || isMast || isAmex || isDisc) {
      if (isVisa) {
        this.setState({ cardType: visa });
      } else if (isMast) {
        this.setState({ cardType: master });
      } else if (isAmex) {
        this.setState({ cardType: amex });
      } else if (isDisc) {
        this.setState({ cardType: disc });
      }
    } else {
      this.setState({ cardType: defaultCard });
      return false;
    }
    return true;
  };

  handleOnFocus = () => {
    console.log("i ma focuesd");
    this.validateCreditCardNumber(this.state.cardno);
  };

  // Validate the form
  validate = () => {
    console.log("I reborn!!!");
    let nameError = "";
    let cardnoError = "";
    let monthError = "";
    let yearError = "";
    let csvError = "";

    if (!this.state.month) {
      monthError = "Month cannt be empty!";
    }

    if (!this.state.year) {
      yearError = "Year cannot be empty!";
    }

    if (!this.state.csv) {
      csvError = "CSV cannot be empty!";
    }

    let validCardNo = this.validateCreditCardNumber(this.state.cardno);

    console.log("valid card no?", validCardNo);
    if (!validCardNo) {
      cardnoError = "Insert a valid card no!";
    }

    let validName = this.validateName(this.state.name);

    console.log("valid name", validName);
    if (!validName) {
      nameError = "Not a valid name!";
    }

    if (nameError || cardnoError || monthError || yearError || csvError) {
      this.setState({
        nameError,
        cardnoError,
        monthError,
        yearError,
        csvError
      });
      return false;
    }

    return true;
  };

  render() {
    
    return (
      <div style={divStyle}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Customer Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={event => this.handleUserInput(event)}
                  className="input"
                  type="text"
                  placeholder="Customr Name"
                />
              </p>
              <div style={{ color: "red" }}>{this.state.nameError}</div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Card No</label>
          </div>

          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  value={this.state.cardno}
                  onChange={event => this.handleUserInput(event)}
                  onBlurCapture={this.handleOnFocus}
                  name="cardno"
                  className="input"
                  type="number"
                  placeholder="Card No"
                />
              </p>
              <div style={{ color: "red" }}>{this.state.cardnoError}</div>
            </div>
            <figure className="image is-32x32">
              <img src={this.state.cardType} />
            </figure>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Exp Date (Month / Year)</label>
          </div>
          <div className="field-body">
            <div className="control">
              <div className="columns">
                <div className="column">
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.month}
                        name="month"
                        onChange={event => this.handleUserInput(event)}
                      >
                        <option />
                        {this.state.months.map(m => (
                          <option key={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.year}
                        name="year"
                        onChange={event => this.handleUserInput(event)}
                      >
                        <option />
                        {this.state.years.map(y => (
                          <option key={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "red" }}>
                {this.state.monthError} {this.state.yearError}
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">CSV</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  value={this.state.csv}
                  onChange={event => this.handleUserInput(event)}
                  name="csv"
                  className="input"
                  type="number"
                  placeholder="CSV No"
                />
              </p>
              <div style={{ color: "red" }}>{this.state.csvError}</div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal" />
          <div className="field-body">
            <div className="field">

              {/* <a
                onClick={event => this.handleFormSubmitEvent(event)}
                className="button is-primary"
              >
                Next
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default PaymentForm