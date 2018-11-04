import React from 'react';

class ShoppingListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            count: 0
        }
    }

    handleIncrement = () => {
        let itemsCopy = this.state;
        itemsCopy.count = itemsCopy.count + 1

        this.setState({
            items: itemsCopy
        })
    }

    handleDecrement = () => {
        let itemsCopy = this.state;
        if(itemsCopy.count - 1 >= 0){
            itemsCopy.count = itemsCopy.count - 1
        }

        this.setState({
            items: itemsCopy
        })
    }

    render() {
        return ( 
            <div>
                <span>{this.state.count}</span>
                <button className="btn btn-success" onClick={this.handleIncrement}>+</button>
                <button className="btn btn-danger" onClick={this.handleDecrement}>-</button>
                <label>{this.state.name}</label>
            </div>
        );
    }
}
 
export default ShoppingListItem;