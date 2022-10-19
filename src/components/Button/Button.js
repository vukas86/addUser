import styles from "./Button.module.css";

const Button = ({ name = "name" }) => {
  return (
    <button type="submit" className={styles.btn}>
      {name}
    </button>
  );
};
export default Button;
