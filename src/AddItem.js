import React from 'react';

class AddItem extends React.Component {
    state = {products: this.props.products};

    quantityGiven = (e) => {
        this.setState({quantity: e.target.value})
    }

    productSelected = (e) => {
        const itemArr = this.state.products.filter(product => product.name === e.target.value);
        if(itemArr.length === 1) {
            this.setState({product: itemArr[0]});
        }
    }

    createOptions = () => {
        const  productOptions = this.state.products.map(product => {
            return (
            <option key={product.id}>{product.name}</option>
            );
        });
        return [<option key="default" disabled="disabled">Select a Product</option>, ...productOptions];
    }

    createItem = () => {
        const item = {
            product: this.state.product,
            quantity: parseInt(this.state.quantity)
        }
        this.props.addItemToCart(item);
    }

    render() {
        return (
            <div className="add-item container">
                <h1>Add Item</h1>
                <p>Quantity</p>
                <input className="add-item-input" id="quantity" defaultValue="0" onChange={this.quantityGiven}/>
                <p>Products</p>
                <select className="add-item-input" id="products" defaultValue="Select a Product" onChange={this.productSelected}>{this.createOptions()}</select>
                <button type="button" className="add-item-button" id="submit" onClick={this.createItem}>Submit</button>
            </div>
        );
    }
};

export default AddItem;