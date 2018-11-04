import React from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [30, 10, 15, 20, 25, 30, 45],
                }]
            }
        }
    }

    test = () => {
        let dataCopy = this.state.data;
        console.log(dataCopy.datasets[0].data[0]);
        dataCopy.datasets[0].data[0] = 5;

        this.setState({
            data: dataCopy
        })
    }

    render() { 
    
        return ( 
            <div>
                <Bar data={this.state.data}/>
                <button onClick={this.test}>Click Me</button>
            </div>
        );
    }
}
 
export default Chart;