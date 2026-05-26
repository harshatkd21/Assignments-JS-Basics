
class Order{
    productName : String
    orderId  : String
    price    : number

    placeOrder(){
        console.log("The Order is placed Successfully for"+`${this.productName}`+`${this.orderId}`)
    }
    cancelOrder(){
        console.log("The Order is Cancelled Successfully for"+`${this.productName}`+`${this.orderId}`)
    }
    constructor(productName : String, orderId  : String, price : number ){
        this.productName = productName
        this.orderId= orderId
        this.price= price
    }
}
const Order_Object = new Order("i Phone 18",'APR20260524',10230000)
Order_Object.placeOrder()
Order_Object.cancelOrder()