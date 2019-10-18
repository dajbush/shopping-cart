import React from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';
import TotalPrice from './TotalPrice';

class App extends React.Component {
    
    state = {
        cartItemsList: [
            { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
            { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
            { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        ],
        products: [
            { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
            { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
            { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
            { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
            { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
            { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
            { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
            { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
            { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
        ]
    }

    addItemToCart = (item) => {
        let currentMaxItemId = this.state.cartItemsList.reduce((max, current) => {
            return (max < current.id ? max = current.id : max);
        }, 1);
        currentMaxItemId += 1;

        let cartItemsList = [
            ...this.state.cartItemsList,
            {
                id: currentMaxItemId++,
                product: item.product,
                quantity: item.quantity
            }
        ];

        this.setState({cartItemsList});
    }

    calculateTotalPrice = () => {
        return (this.state.cartItemsList.reduce((total, current) => total + (current.product.priceInCents * current.quantity), 0) / 100).toFixed(2);
    }

    render () {
        return (
            <div className="App">
                <CartHeader />
                <CartItems items={this.state.cartItemsList} />
                <TotalPrice calculateTotalPrice={this.calculateTotalPrice} />
                <AddItem products={this.state.products} addItemToCart={this.addItemToCart}/>
                <CartFooter copyright='2016'/>
            </div>
        );
    }
}

export default App;
