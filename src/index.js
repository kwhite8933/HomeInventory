import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingListItem from './components/shoppingListItem';
import Chart from './components/chartExample';
import ChartWaterUsage from './components/waterUsage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App(){
    const items = fruits.map(fruit => {
        return (
            <ShoppingListItem key={fruit} name={fruit}/>
        );
    })

    return(
        <div className="row">
            <div className="col-md-3">
                <div className="bodyComponent">
                    <ChartWaterUsage/>
                </div>
                <div className="bodyComponent">
                    {items}
                </div>
            </div>
            <div className="col-md-6">
                <div className="bodyComponent">
                    {items}
                </div>
                <div className="bodyComponent">
                    {items}
                </div>
            </div>
            <div className="col-md-3">
                <div className="bodyComponent">
                    <h1><Chart/></h1>
                </div>
            </div>
        </div>
        
    );
}

const fruits = ["apples", "oranges", "bananas"];

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);