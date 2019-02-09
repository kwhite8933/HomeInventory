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
            itemsHidden: true,
            hideListButton: true,
        }
    }

    // Change the status of each item
    changeItemStatus = (name, status, hidden) => {
        let _list = this.state.list;
        
        for(let i=0; i<_list.length; i++){
            if(_list[i].name === name){
                if(_list[i].status === true && hidden === true){
                    _list[i].status = status;
                }
                else{
                    _list[i].status = status;
                    _list[i].hide = hidden;
                }
            }
        }

        let _itemsHidden = false;
        for(let i=0; i<_list.length; i++){
            if(_list[i].hide === true){
                _itemsHidden = true;
            }
        }

        if(this.state.hideListButton){
            this.setState({
                list: _list,
                itemsHidden: _itemsHidden,
                hideListButton: false
            })
        }
        else
        {
            this.setState({
                list: _list,
                itemsHidden: _itemsHidden
            })
        }
        
    }

    // toggle hiding and showing items when they are checked
    toggleCheckedItems = () => {
        let _list = this.state.list;

        // for(let i=0; i<_list.length; i++){
        //     if(this.state.hideList){
        //         if(_list[i].status === true){
        //             _list[i].hide = true;    
        //         }
        //         else if(_list[i].status === false){
        //             _list[i].hide = false;
        //         }
        //     }
        //     else{
        //         if(_list[i].status === true){
        //             _list[i].hide = false;
        //         }
        //         else if(_list[i].status === false){
        //             _list[i].hide = false;
        //         }
        //     }
        // }
        for(let i=0; i<_list.length; i++){
            if(!this.state.itemsHidden){
                _list[i].hide = _list[i].status ? true : false;
            }
            else
            {
                _list[i].hide = false;
            }
        }

        this.setState({
            list: _list,
            itemsHidden: !this.state.itemsHidden
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
                {
                    this.state.hideListButton
                    ?
                        <div></div>
                    :
                        this.state.itemsHidden
                        ?
                            <p id="toggleInCartItems" onClick={this.toggleCheckedItems}>Show Checked...</p>
                        :
                            <p id="toggleInCartItems" onClick={this.toggleCheckedItems}>Hide Checked...</p>
                }
            </div>
        );
    }
}

export default ShoppingList;