import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import ProductWrapper from "../components/product/productWrapper";

const Shop = () => {
    return ( 
        <div>
            <ProductWrapper path="Back To Home" topic="All Products" url="https://fakestoreapi.com/products"/>
            <div className="mt-16">
                <CarouselComponent title="Recommended products"/>
            </div>
        </div>
     );
}
 
export default Shop;