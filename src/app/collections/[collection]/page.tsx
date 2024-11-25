import CarouselComponent from "@/app/components/CarouselComponent/CarouselComponent";
import ProductWrapper from "@/app/components/product/productWrapper";

const Collections = async ({params}:{params:{collection:string}}) => {
    const { collection } = await params;

    return (
        <div>
            <ProductWrapper path={`HomePage / ${collection}`} topic={collection} url={`https://fakestoreapi.com/products`} />
            <div className="mt-16">
                <CarouselComponent title="Recommended products"/>
            </div>
        </div>
        );
}
 
export default Collections;