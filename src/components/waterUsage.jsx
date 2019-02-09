import React from 'react';
import {Bar} from 'react-chartjs-2';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faCoffee, faAirFreshener, faPlus, faMinus, faGlasses } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);
library.add(faCoffee);
library.add(faPlus);
library.add(faMinus);
library.add(faAirFreshener);
library.add(faGlasses);

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
                <FontAwesomeIcon onClick={this.test} icon="glasses"/>
            </div>
        );
    }
}
 
export default ChartWaterUsage;