import ProductDetails from "@/app/components/ProductDetails/productDetails"

const ProductDetailsPage = async() =>{

    const response = await fetch('http://ecommerce.soroushsalari.com/store/products/prod_01JDBYZVY9RG9EW2D1EMQ5K6GD', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-publishable-api-key": "pk_78dbacd39fb1e3331dd2df342cf7cb798e32a587187049f1f2bc2a18e9afd7ce",
          },
    })

    const data = await response.json();


    return <ProductDetails data={data}/>
    
}

export default ProductDetailsPage