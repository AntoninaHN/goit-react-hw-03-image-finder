import { createPortal } from "react-dom";
import { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.showModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};
export default Modal;
