import React from 'react';
import GoalsListItem from './goalsListItem'

class GoalsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            goals: [
                "Brush Teeth",
                "Test",
                "Drink Water",
                "Eat Healthy"
            ]
        }
    }

    render(){
        return (
            <div>
                <form>
                    {
                        this.state.goals.map((goal) => {
                            return (
                                <GoalsListItem key={goal} name={goal}/>
                            );
                        })
                    }
                </form>
            </div>
        );
    }
}

export default GoalsList;