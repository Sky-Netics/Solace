import CarouselComponent from "@/app/components/CarouselComponent/CarouselComponent";
import ProductWrapper from "@/app/components/product/productWrapper";

const Result = async ({params}:{params:{title:string}}) => {
    const { title } = await params;

    return (
        <div>
            <ProductWrapper path={`HomePage / ${title}`} topic={title} url={`https://fakestoreapi.com/products`} />
            <div className="mt-16">
                <CarouselComponent title="Recommended products"/>
            </div>
        </div>
    );
}
 
export default Result;