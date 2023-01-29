import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

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
    console.log(props)

    const extra = (
        <a>
          <Button animated="fade" color="orange">
                <Button.Content visible>R${ price }</Button.Content>
            <Button.Content hidden>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </a>
      );
    
    return (
        <Card
            image={image[0].url}
            header={name}
            meta={'Quantidade mínima: ' + minimumQuantity}
            description={description}
            extra={extra}
        />
    )


}

export default ProductCard;