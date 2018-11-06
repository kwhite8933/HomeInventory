import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faCoffee, faAirFreshener, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faStroopwafel);
library.add(faCoffee);
library.add(faPlus);
library.add(faMinus);
library.add(faAirFreshener);

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
                <FontAwesomeIcon icon="plus" onClick={this.handleIncrement}/>
                <FontAwesomeIcon icon="minus" onClick={this.handleDecrement}/>
                {/* <button className="btn btn-success" onClick={this.handleIncrement}>+</button> */}
                {/* <button className="btn btn-danger" onClick={this.handleDecrement}>-</button> */}
                <label>{this.state.name}</label>
            </div>
        );
    }
}
 
export default ShoppingListItem;