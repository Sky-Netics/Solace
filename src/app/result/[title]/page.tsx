import CarouselComponent from "@/app/components/CarouselComponent/CarouselComponent";
import ProductWrapper from "@/app/components/product/productWrapper";

const Result = async ({params}:{params:{title:string}}) => {
    const { title } = await params;

    return (
        <div>
            <ProductWrapper path={`HomePage / ${title}`} topic={title} url={`http://ecommerce.soroushsalari.com/store/products`} />
            <div className="mt-16">
                <CarouselComponent title="Recommended products"/>
            </div>
        </div>
    );
}
 
export default Result;