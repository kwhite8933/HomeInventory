import React from 'react';
import ShoppingListItem from './shoppingListItem'

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                "Crystal Light",
                "Turkey",
                "American Cheese",
                "Panini Bread"
            ]
        }
    }

    render(){
        return (
            <div>
                <form>
                    {
                        this.state.list.map((goal) => {
                            return (
                                <ShoppingListItem key={goal} name={goal}/>
                            );
                        })
                    }
                </form>
            </div>
        );
    }
}

export default ShoppingList;