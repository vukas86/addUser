import containerStyles from "../User/User.module.css";
import styles from "./RenderedUser.module.css";

const RenderedUser = (props) => {
  const users = props.items;

  return (
    <>
      <div className={`${containerStyles.container} ${styles.userContainer}`}>
        {users === "" ? (
          <div className={styles.renderedUser}>
            <p>No User Found!</p>
          </div>
        ) : (
          users.map((e) => {
            return (
              <div key={e.name} className={styles.renderedUser}>
                <p>
                  <span>{e.name}</span>
                  <span> ( {e.age} years old)</span>
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
export default RenderedUser;
