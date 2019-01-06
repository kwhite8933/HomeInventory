import React from 'react';

class GoalsListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            isComplete: false
        }
    }

    render(){
        return (
            <div>
                <input type="checkbox" name="{this.props.name}"></input>
                <label>{this.props.name}</label>
            </div>
        );
    }

}

export default GoalsListItem;