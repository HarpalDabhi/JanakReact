function ArgsPass({old,latest,discount,delivery}){
    return <div>
        <strike>{old}</strike>
        <span>{latest}</span>
        <b> Special Offer : {discount}% Discount</b>
        <i>Delivery Charge : {delivery}</i>
    </div>
}

export default ArgsPass;