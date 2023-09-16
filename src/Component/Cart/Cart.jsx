import PropTypes from "prop-types"
const Cart = ({select}) => {
    return (
        <div className="flex gap-2 items-center my-3 ml-4 bg-orange-200 rounded-md">
            <img className="w-12" src={select.image} alt="" />
            <h1 className="text-xl">{select.name}</h1>
        </div>
    );
};
Cart.propTypes = {
    select : PropTypes.object.isRequired
}
export default Cart;