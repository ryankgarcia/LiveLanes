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
            <div className="mypurchase-column-side">
              <div className="checkout-summary-box"></div>
              <div className="checkout-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
