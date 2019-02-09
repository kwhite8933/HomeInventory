import React from 'react';

    function ShoppingListItem(props){

        let handleChange = () => {

            let _name = props.name;
            let _status = !props.status;
            let _hidden = !props.hide;
    
            props.onItemChecked(_name, _status, _hidden);
        }

        let hideItem = ""
        hideItem += props.hide ? "shoppingListItemHidden" : "shoppingListItemShow";

        return (
            <div className={hideItem}>
                <input className="shoppingListItemInput"
                    type="checkbox"
                    name="{props.name}"
                    value={props.status}
                    onChange={handleChange}>
                </input>
                {
                    props.status ?
                        <label className="shoppingListItemLabel" style={{textDecoration: 'line-through'}}>{props.name}</label>
                    :
                        <label className="shoppingListItemLabel" style={{textDecoration: 'none'}}>{props.name}</label>
                }
            </div>
        );
    }

export default ShoppingListItem;