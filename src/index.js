import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './components/shoppingList';
import Chart from './components/chartExample';
import ChartWaterUsage from './components/waterUsage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App(){
    // const items = fruits.map(fruit => {
    //     return (
    //         <ShoppingList fruits={fruits}/>
    //     );
    // })

    return(
        <div className="row">
            <div className="col-md-3">
                <div className="bodyComponent">
                    <ChartWaterUsage/>
                </div>
                <div className="bodyComponent">
                    <ShoppingList key={"first"}/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="bodyComponent">
                    <ShoppingList key={"second"}/>
                </div>
                <div className="bodyComponent">
                    <ShoppingList key={"third"}/>
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

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);