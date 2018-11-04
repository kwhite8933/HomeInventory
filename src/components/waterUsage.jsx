import React from 'react';
import {Bar} from 'react-chartjs-2';

class ChartWaterUsage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ["Water"],
                datasets: [{
                    label: "Total Usage",
                    backgroundColor: '#40A4DF',
                    borderColor: '#40A4DF',
                    data: [48],
                }]
            }
        }
    }

    test = () => {
        let dataCopy = this.state.data;
        console.log(dataCopy.datasets[0].data[0]);
        dataCopy.datasets[0].data[0] = 10;

        this.setState({
            data: dataCopy
        })
    }

    render() { 
    
        return ( 
            <div>
                <Bar data={this.state.data}/>
                {/* <button onClick={this.test}>Click Me</button> */}
            </div>
        );
    }
}
 
export default ChartWaterUsage;