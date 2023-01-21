
function Header(props){
    return(
        <div className="flex shopping-cart">
            <div onClick={()=>props.handleShow(false)}>shopping cart app </div>
            <div onClick={()=>props.handleShow(true)}>cart
            <sup>{props.count}</sup></div>
        </div>
    );
}
export default Header;