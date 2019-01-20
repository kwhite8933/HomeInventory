import React from 'react';
import ShoppingListItem from './shoppingListItem'
import '../index.css';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {name: "Crystal Light", status: false, hide: false},
                {name: "Turkey", status: false, hide: false},
                {name: "American Cheese", status: false, hide: false},
                {name: "Panini Bread", status: false, hide: false}
            ],
            hidden: [],
            hideList: false
        }
    }

    // Add checked off items to archived list to be viewed later 

    changeItemStatus = (name, status, hidden) => {
        let _list = this.state.list;
        
        for(let i=0; i<_list.length; i++){
            if(_list[i].name === name){
                _list[i].status = status;
                _list[i].hide = hidden;
            }
        }

        this.setState({
            list: _list
        });
    }

    // toggle hiding and showing items when they are checked
    toggleCheckedItems = () => {
        let _list = this.state.list;

        for(let i=0; i<_list.length; i++){
            if(this.state.hideList){
                if(_list[i].status === true){
                    _list[i].hide = true;    
                }
            }
            else{
                if(_list[i].status === true){
                    _list[i].hide = false;
                }
            }
        }

        this.setState({
            list: _list,
            hideList: !this.state.hideList
        });

    }

    render(){
        return (
            <div>
                <form>
                    {
                        this.state.list.map((item) => {
                            return (
                                <ShoppingListItem key={item.name} name={item.name} status={item.status} hide={item.hide} onItemChecked={this.changeItemStatus}/>
                            );
                        })
                    }
                </form>
                <p id="inCartItems" onClick={this.toggleCheckedItems}>Show All...</p>
            </div>
        );
    }
}

export default ShoppingList;