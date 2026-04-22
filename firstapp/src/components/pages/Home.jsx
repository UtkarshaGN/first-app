import Header from "../common/Header"
import Footer from "../common/Footer"
import "./Home.css"
import Button from "../common/Button";
import { product } from "../../data/product";
function Home() {
    let n = 10;
    let m = 10;
    let p = [10, 20, 30, 40, 50]

    let status = false;


    let user = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane", age: 25 },
        { id: 3, name: "Bob", age: 35 },
        { id: 4, name: "Alice", age: 28 },
    ]



    return (
        <>

            {user.map((obj, index) => {
                return (
                    <h2>{index + 1} {obj.name} {obj.age}</h2>
                )
            })}

            <section>
                {p}
                {status ? <p>Hello world</p> : ''}
                {n + m}
                 <Button value={"View details"} color="pink" />
                <h1>Welcome to Home page</h1>
                {"Welcome}"}
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </p>
                {'hello}'}
               
            </section>
            <section className="productSection">
                <h2>Our product</h2>
                <div className="productMid">


                    {product.map((obj, index) => <ProductCard data={obj} />)}





                </div>
                
            </section>
        </>


    )
}

export default Home;


function ProductCard({ data }) {


    return (
        <div className="productItems">
            <img src={data.thumbnail} alt="" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <Button value={"Add to cart"} color="blue" />
        </div>
    )
}
