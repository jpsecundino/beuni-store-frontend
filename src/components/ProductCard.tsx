import { Icon, Button } from "semantic-ui-react";
import "./ProductCard.css";

export type ProductProps = {
    product: {
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
    let { name, description, price, image, minimumQuantity } = props.product;

    const extra = (
        <a>
          <Button animated="fade" color="orange">
                <Button.Content visible>R${ parseFloat(price).toFixed(2) }</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </a>
    );

    return (
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
                <Button animated="fade" color="orange">
                    <Button.Content hidden>
                        <Icon name="plus" />
                    </Button.Content>
                    
                    <Button.Content visible>
                        <Icon name="shop" />
                    </Button.Content>
                </Button>
            </div>
        </div>
    )


}

export default ProductCard;
