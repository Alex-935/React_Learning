import PropTypes from "prop-types";

function List(props) {

    /* Is now in App.jsx and passed as a prop
    const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Orange", calories: 45}, 
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Coconut", calories: 159}, 
                    {id: 5, name: "Pineapple", calories: 37}];
    */
   const fruits = props.items;

   const itemList = props.items;
   const category = props.category;

    fruits.sort((a, b) => a.name.localeCompare(b.name));
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alpahbetical
    // fruits.sort((a,b) => a.colories = b.calories); numeric ascending
    // fruits.sort((a,b) => b.colories = a.calories); numeric descending

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                        </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number,
                                            })),
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List