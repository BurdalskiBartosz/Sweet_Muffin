import React, { Component } from 'react';
import Product from '../components/Product/Product'
import cake1 from '../images/Menu images/cake1.jpg'
import cake2 from '../images/Menu images/cake2.jpg'
import cake3 from '../images/Menu images/cake3.jpg'
import cake4 from '../images/Menu images/cake4.jpg'
import cake5 from '../images/Menu images/cake5.jpg'
import cake6 from '../images/Menu images/cake6.jpg'
import cake7 from '../images/Menu images/cake7.jpg'
import cake8 from '../images/Menu images/cake8.jpg'
import cake9 from '../images/Menu images/cake9.jpg'
import cake10 from '../images/Menu images/cake10.jpg'
import cake11 from '../images/Menu images/cake11.jpg'
import cake12 from '../images/Menu images/cake12.jpg'

class MenuPage extends Component {
    state = {
        products: [
            { id: 1, name: "Elegancka czekolada", price: "7zł", priceForFive: "30zł", image: cake1, visible: false, },
            { id: 2, name: "Waniliffin", price: "5zł", priceForFive: "20zł", image: cake2, visible: false, },
            { id: 3, name: "Czerwonka", price: "4zł", priceForFive: "17zł", image: cake3, visible: false, },
            { id: 4, name: "Albinos", price: "5zł", priceForFive: "22zł", image: cake4, visible: false, },
            { id: 5, name: "Malinowy cud", price: "6zł", priceForFive: "25zł", image: cake5, visible: false, },
            { id: 6, name: "Francuzik", price: "6zł", priceForFive: "25zł", image: cake6, visible: false, },
            { id: 7, name: "Pudrowy róż", price: "6zł", priceForFive: "25zł", image: cake7, visible: false, },
            { id: 8, name: "Cynamonowa rozkosz", price: "6zł", priceForFive: "25zł", image: cake8, visible: false, },
            { id: 9, name: "Czerwony baron", price: "6zł", priceForFive: "25zł", image: cake9, visible: false, },
            { id: 10, name: "Suflet", price: "6zł", priceForFive: "25zł", image: cake10, visible: false, },
            { id: 11, name: "Truskawkowa krówka", price: "6zł", priceForFive: "25zł", image: cake11, visible: false, },
            { id: 12, name: "Sernik z truskawką", price: "6zł", priceForFive: "25zł", image: cake12, visible: false, },
        ]
    }

    handleClick = (id) => {
        const products = [...this.state.products];
        products.map(product => {
            if (product.id !== id) {
                product.visible = false;
            }
            else if (product.id === id) {
                product.visible = true;
            }
        })
        this.setState({
            products
        })
    }

    render() {
        return (
            <div className="menuPage">
                {this.state.products.map(product => (
                    <Product id={product.id} click={this.handleClick} item={product.name} key={product.id} />
                ))}
            </div>
        );
    }
}

export default MenuPage;