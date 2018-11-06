import React from 'react';
import ShoppingListItem from './shoppingListItem';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faCoffee, faAirFreshener, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);
library.add(faCoffee);
library.add(faPlus);
library.add(faAirFreshener);

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fruits: [
                "apples",
                "oranges",
                "bananas"
            ],
            inputClicked: false
        }
    }

    addItem = () => {
        const id = document.getElementById("addItem".concat(this.props.test));
        if(this.state.fruits.findIndex(() => {return id.value}) === -1){
            let itemsCopy = this.state.fruits;
            itemsCopy.push(id.value);
            console.log(itemsCopy);

            this.setState({
                fruits: itemsCopy,
                inputClicked: false
            });
            id.value="";
        } else {
            console.log('input already exists')
            id.value = "";
            this.setState({
                inputClicked: false
            })
        }
        

    }

    showForm = () => {
        this.setState({
            inputClicked: !this.state.inputClicked
        })
    }

    handleEnter = (e) => {
        if(e.key === 'Enter'){
            this.addItem();
        }
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
                    {/* <FontAwesomeIcon className="btnAddItem" onClick={this.handleClick} icon="plus"/> */}
                    
                    {
                        this.state.inputClicked?
                            <input id={"addItem".concat(this.props.test)} onKeyPress={this.handleEnter}></input>
                        :
                        <div></div>
                    }
                </div>
                <FontAwesomeIcon className="btnAddItem" onClick={this.showForm.bind()} icon="plus"/>
            </div>
        );
    }
}
 
export default ShoppingList;