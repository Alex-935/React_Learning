
function Button() {

    // in-line styling
    const styles = {
        backgroundColor: "hsl(40, 100%, 50)",
        border: "none",
    }

    return(
        <button className="button" style={styles}>Click Me</button>
    );
}
export default Button