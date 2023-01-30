import ProductCard from "./ProductCard";

type ProductListProps = {
    productList: [],
};

function ProductList(props: ProductListProps) {
    return (
        <div>
            {
                props.productList.map(product =>
                    <ProductCard
                        name={product['name']}
                        description={product['description']}
                        price={product['price']}
                        image={product['image']}
                        minimumQuantity={product['minimumQuantity']}
                    />
                )
            }
        </div>
   ) 

}

export default ProductList;