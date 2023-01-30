import { Card, Icon, Button, CardDescription } from "semantic-ui-react";

type ProductProps = {
    name: string,
    description: string,
    price: string,
    minimumQuantity: string,
    image: [{
        url: string,
    }]
}

function ProductCard(props: ProductProps) {
    let { name, description, price, image, minimumQuantity } = props;

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

    let cardDescription = <CardDescription textAlign="left">{description}</CardDescription>
    
    return (
        <Card
            key={name}
            image={image[0].url}
            header={name}
            meta={'Quantidade mínima: ' + minimumQuantity}
            description={cardDescription}
            extra={extra}
        />
    )


}

export default ProductCard;