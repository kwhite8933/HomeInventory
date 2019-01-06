import React from 'react';
import ShoppingListItem from './shoppingListItem';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faCoffee, faAirFreshener, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);
library.add(faCoffee);
library.add(faPlus);
library.add(faAirFreshener);
library.add(faSpinner);

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

    // add item 
    addItem = () => {
        const id = document.getElementById("addItem".concat(this.props.test));
        
        if(id.value === ""){
            this.hideForm();
        } else {
            if(this.state.fruits.findIndex((item) => {return id.value === item}) === -1){
                let itemsCopy = this.state.fruits;
                itemsCopy.push(id.value);
    
                this.setState({
                    fruits: itemsCopy,
                    inputClicked: false
                });
                id.value="";
            } else {
                console.log('input already exists')
                this.hideForm();
            }
        }
    }

    hideForm = () => {
        document.getElementById("addItem".concat(this.props.test)).value = "";

        this.setState({
            inputClicked: false
        })
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
                    {
                        this.state.inputClicked?
                            <input id={"addItem".concat(this.props.test)} onKeyPress={this.handleEnter}></input>
                        :
                        <div></div>
                    }
                </div>
                <FontAwesomeIcon className="btnAddItem" onClick={this.showForm} icon="plus"/>
            </div>
        );
    }
}
 
export default ShoppingList;