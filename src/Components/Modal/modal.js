
import { Modal } from '@material-ui/core';

export default Modal = (props) => {
  const { component, showStatus } = props;
  return (
    <Modal open={showStatus}>
      {component}
    </Modal>
  )
};
