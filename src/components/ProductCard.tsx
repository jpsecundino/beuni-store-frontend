import { Icon, Button } from "semantic-ui-react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export type ProductProps = {
    productInfo: {
        id: number,
        name: string,
        description: string,
        price: string,
        minimumQuantity: string,
        rating: number,
        hasFreeShipping: boolean,
        total_stock: number,
        image: [{
            url: string,
        }]
    }
};

function ProductCard(props: ProductProps) {
    let { id, name, description, price, image, minimumQuantity, total_stock } = props.productInfo;

    function isOutOfStock() {
        return total_stock === 0;
    }

    return (
        <Link to={{pathname: "/product", search:`?id=${id}`}}>
            <div className="card">
                <div className="top">
                    <img className="image" src={image[0].url}></img>
                </div>
                <div className="middle">
                    <p className="product-name">{name}</p>
                    <p className="minimum-quantity">Pedido mínimo {minimumQuantity}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="bottom">
                    <span className="price">R${parseFloat(price).toFixed(2)}</span>
                    <div className="button-region">
                        {isOutOfStock() ? "Fora de estoque" : ""}
                        <Button
                            size="large"
                            className="button"
                            animated="fade"
                            color="orange"
                            disabled={isOutOfStock()}
                        >
                            <Button.Content hidden>
                                +
                            </Button.Content>
                            
                            <Button.Content visible>
                                <Icon size="large" name="plus cart" />
                            </Button.Content>
                        </Button>
                    </div>
                    </div>

                </div>
        </Link>
    )


}

export default ProductCard;
