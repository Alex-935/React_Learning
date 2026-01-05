import styles from "./ButtonModule.module.css"
// generates a unique hash to prevent naming conflicts

function ButtonModule() {

    return(
        <button className={styles.button}>Click Me</button>
    );
}
export default ButtonModule