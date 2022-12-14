import styles from "./Modal.module.css";
import containerStyles from "../User/User.module.css";
import Button from "../Button/Button";

const Modal = ({ closeModal }) => {
  const modalHandler = () => {
    closeModal(false);
  };

  return (
    <div>
      <div className={styles.modalBg}>
        <div
          className={`${containerStyles.container} ${styles.modalContainer}`}
        >
          <div className={styles.title}>
            <h2 className={styles.title.h2}>Invalid Input</h2>
          </div>
          <div className={styles.modalBtn}>
            <p>Please enter a valid name and age (non-empty value).</p>
            <div className={styles.btn} onClick={modalHandler}>
              <Button name={"Okey"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
