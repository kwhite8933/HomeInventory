import React from 'react';
import ShoppingListItem from './shoppingListItem'

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruits: [
                "apples",
                "oranges",
                "bananas"
            ]
        }
    }

    handleClick = () => {
        let itemsCopy = this.state.fruits;
        itemsCopy.push("watermelon");
        console.log(itemsCopy);

        this.setState({
            fruits: itemsCopy
        });

    }

    render() { 
        return (
            <div>
                <div>
                    {
                        this.state.fruits.map((fruit) => {
                            return(
                                <ShoppingListItem key={fruit} name={fruit}/>
                            );
                        })
                    }
                </div>
                <div>
                    <button onClick={this.handleClick}>Add</button>
                </div>
            </div>
        );
    }
}
 
export default ShoppingList;