import { RiLock2Fill } from 'react-icons/ri';
import './MyPurchasesLayout.css';

export function MyPurchases() {
  return (
    <div className="page-color">
      <div className="mypurchases-container">
        <div className="mypurchase-row">
          <div className="mypurchase-column-main">
            <h2 className="final-sale-text">
              Congratulations, you are the highest bidder!
            </h2>
            <h2 className="final-sale-text">Please continue to checkout...</h2>
            <div className="final-sale-card"></div>
            <div className="checkout-summary-box">
              <h2>Checkout Summary</h2>
              <h3 className="checkout-summary-chargers final-prices">
                Closing Bid:
              </h3>{' '}
              <span className="checkout-summary-cost final charges">
                $4,500
              </span>
              <h3>Buyer Fee:</h3> <span>$340</span>
              <h3>Subtotal:</h3> <span>$4,840</span>
            </div>
            <div className="checkout-box">
              <h4>Transportation:</h4> <span>$180</span>
            </div>
          </div>
          <h4 className="final-charges">Total:</h4>
          <span className="final-prices">$5,020</span>
        </div>
        <button className="checkout-button">
          Begin Checkout {<RiLock2Fill color="white" />}
        </button>
      </div>
    </div>
  );
}
