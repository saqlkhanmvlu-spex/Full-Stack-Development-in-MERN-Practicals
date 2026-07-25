function HotelCard(props) {
    const discount = (props.price * props.discount) / 100;
    const finalPrice = props.price - discount;

    return (
        <div>
            <h2>{props.restaurant}</h2>
            <p>Food Item : {props.food}</p>
            <p>Original Price : ₹{props.price}</p>
            <p>Discount : {props.discount}%</p>
            <p>Discount Amount : ₹{discount}</p>
            <p><b>Final Price : ₹{finalPrice}</b></p>
            <p>Rating : {props.rating}</p>
        </div>
    );
}
export default HotelCard;
