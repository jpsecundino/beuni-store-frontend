import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { ProductProps } from './ProductCard';
import Rating from '@mui/material/Rating';
import { Icon, Button } from "semantic-ui-react";


function ProductPage(props: ProductProps) {
    return (
            
            <div className='product-info-modal'>
                <div className="left">
                    <img className="image" src='https://m.media-amazon.com/images/I/71Ulhyxs4pL._AC_SL1200_.jpg'></img>
                </div>
                <div className='right'>
                    <h1>Product Name</h1>
                    <Rating name="read-only" value={3} readOnly />
                    <p>Has free shipping</p>
                    <p>Product in stock</p>
                    <p>Minimum purchase</p>
                    <p>Product descriptionProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct descriptionProduct description</p>
                    <Button animated="fade" color="orange">
                        <Button.Content visible>
                            Adicionar ao carrinho
                        </Button.Content>
                        
                        <Button.Content hidden>
                            <Icon name="shop" />
                        </Button.Content>
                    </Button>
                </div>
            </div>
    );

}

export default ProductPage;