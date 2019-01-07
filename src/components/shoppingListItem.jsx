import React from 'react';

class ShoppingListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            isComplete: false
        }
    }

    handleChange = () => {
        this.setState({
            isComplete: !this.state.isComplete
        })
    }

    render(){
        return (
            <div>
                <input className="shoppingListItemInput"
                    type="checkbox"
                    name="{this.props.name}"
                    checked={this.state.isComplete}
                    onChange={this.handleChange}>
                </input>
                {
                    this.state.isComplete ?
                        <label className="shoppingListItemLabel" style={{textDecoration: 'line-through'}}>{this.props.name}</label>
                    :
                        <label className="shoppingListItemLabel" style={{textDecoration: 'none'}}>{this.props.name}</label>
                }
            </div>
        );
    }

}

export default ShoppingListItem;