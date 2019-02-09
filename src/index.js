import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import InventoryList from './components/inventoryList';
import Chart from './components/chartExample';
import ChartWaterUsage from './components/waterUsage';
import ShoppingList from './components/shoppingList';
// import ModalTest from './components/ModalTest';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App(){
    return(
        <React.Fragment>
            <div id="header">
                <div id="header-content">
                    <div id="header-left">
                        <span>Home Inventory</span>
                    </div>
                    <div id="header-right">
                        <span className="header-item">Kyle</span>
                        <span className="header-item">Is A</span>
                        <span className="header-item">Baller</span>
                    </div>
                </div>
            </div>
            <div id="body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bodyComponent">
                            <ChartWaterUsage/>
                        </div>
                        <div className="bodyComponent">
                            <span className="bodyComponentTitle">Title</span>
                            <div className="bodyComponentBody">
                                <InventoryList className="bodyComponentBody" key={"first"} test={"first"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bodyComponent">
                            <span className="bodyComponentTitle">Title</span>
                            <div className="bodyComponentBody">
                                <InventoryList key={"second"} test={"second"}/>
                            </div>
                        </div>
                        <div className="bodyComponent">
                            <span className="bodyComponentTitle">Title</span>
                            <div className="bodyComponentBody">
                                <InventoryList key={"third"} test={"third"}/>
                            </div>
                        </div>
                        {/* <div className="bodyComponent">
                            <ModalTest/>
                        </div> */}
                    </div>
                    <div className="col-md-3">
                        <div className="bodyComponent">
                            <h1><Chart/></h1>
                        </div>
                        <div className="bodyComponent">
                            <span className="bodyComponentTitle">Shopping List</span>
                            <ShoppingList/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);