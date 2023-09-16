import PropTypes from "prop-types"
import Cart from "../Cart/Cart";

const Carts = ({selected,cost,budget}) => {
    return (
        <div className="md:w-1/3 mx-2">
            <h1>Selected Member{selected.length}</h1>
            <h1>Total Cost : {cost}</h1>
            <h1>Budget : {budget}</h1>
            {
                selected.map((select,inx) => <Cart key={inx} select={select}></Cart>)
            }
        </div>
    );
};
Carts.propTypes = {
    selected : PropTypes.array.isRequired,
    cost : PropTypes.number.isRequired,
    budget: PropTypes.number

}

export default Carts;