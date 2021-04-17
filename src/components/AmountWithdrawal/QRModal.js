import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function QRModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button positive>Generate QR Code</Button>}
    >
      <Modal.Header>Scan the below QR code</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png' wrapped />
        <Modal.Description>
          <p>Scan the QR code using the ATM QR Scanner to complete the transaction</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default QRModal
