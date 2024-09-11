import { Modal } from "semantic-ui-react";

export function BasicModal(props) {
  const { children, show, onClose, title } = props;

  return (
    <Modal open={show} onClose={onClose} size="small">
      <Modal.Header>{title}</Modal.Header>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: "3vh",
          right: "3vw",
          color: "#ff5400",
          fontSize: "20px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        X
      </div>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
