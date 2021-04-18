import React from 'react'
import Modal from '@material-ui/core/Modal';

function QRModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className="qr-container">
      <img className="qr-code" size='small' src='https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png' />
      <a href="/transactionComplete">
      <button className="btn btn btn-light ok-button" type="button" onClick={handleOpen}>
        OK
    </button></a>
    </div>
  );
  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={handleOpen}>
        Generate QR Code
    </button>
      <Modal
        open={open}
        onClose={handleClose}

      >
        {body}

      </Modal>

    </div>
  )
}

export default QRModal
