import CarouselComponent from "../components/CarouselComponent/CarouselComponent";
import ProductWrapper from "../components/product/productWrapper";

const Shop = () => {
    return ( 
        <div>
            <ProductWrapper path="Back To Home" topic="All Products" url="https://fakestoreapi.com/products"/>
            <CarouselComponent title="Recommended products"/>
        </div>
     );
}
 
export default Shop;