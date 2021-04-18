import React from 'react';
import { Link } from 'react-router-dom'
import PaymentCard from 'react-payment-card-component'
import Navbar from '../Navbar/Navbar';
import UserApi from '../AuthService/index'
import './index.css'

export default class DisplayCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      cardData: [],
      showAccountNumber: false,
      

    }

  }

  componentDidMount() {
    const userId = 1
    if (userId)
      UserApi.getCardDetails(userId, data => {
        if(data)
        this.setState({ cardData: data })
      })
  }
  handleTooltip = () => {
    this.setState({ showAccountNumber: !this.state.showAccountNumber })

  }
  convertAccountNumber = (accno) => {
    let formattedAccNo = ''
    if (accno) {
      formattedAccNo = `${accno.charAt(0)}xxxxxxxxxx${accno.charAt(11)}`
    }
    return formattedAccNo
  }

  flipCard = () => {
    const flipped = !this.state.flipped
    this.setState({ flipped, })
  }
  render() {
    const accountNumber = this.state.cardData.accountNumber
    return (
      <div>
        <Navbar />
        <div className="card">

          <div className="card-body">
            <h5 className="card-title">Hi {this.state.cardData.cardName} !</h5>
            <div id="payment-card" onClick={this.flipCard}>
              <PaymentCard
                bank="Digiwallet"
                model="personnalite"
                type="black"
                brand="mastercard"
                number={this.convertAccountNumber(accountNumber)}
                cvv={this.state.cardData.cvv}
                holderName={this.state.cardData.cardName}
                expiration={this.state.cardData.expiryDate}
                flipped={this.state.flipped}

              />
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Available Balance: {this.state.cardData.availableBalance}</li>
              <li className="list-group-item">Expiry date: {this.state.cardData.expiryDate}</li>
            </ul>
            <div className="button-container">

              <button className="btn btn-primary button-container" onClick={this.handleTooltip}>Show Account Number</button>
              {this.state.showAccountNumber ?
                <div class="tooltip"> 
                

                <span class="tooltiptext">Account Number:<p>{this.state.cardData.accountNumber}</p></span>
              </div>

                : ''}
              <span>
                <Link to="/amountWithdrawal">
                  <button className="btn btn-primary button-container">Make Transaction</button>
                  </Link>
              </span>
            </div>
          </div>
        </div>
      </div>)
  }
}
DisplayCard.propTypes = {};

DisplayCard.defaultProps = {};


