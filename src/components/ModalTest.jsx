// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

// class ModalTest extends React.Component {
//     constructor(props){
//         super(props);
//         this.setState = {
//             show: false
//         };
//     }

//     handleShow = () => {
//         this.setState({show: false});
//     }

//     handleClose = () => {
//         this.setState({show: true});
//     }

//     render(){    
//         return(
//             <div>
//                 <div>
//                     <button onClick={this.handleShow}>Launch</button>
//                 </div>
//                 <Modal show={this.state.show} onHide={this.handleClose} >
//                     <Modal.Header closeButton>
//                         <Modal.Title>Header</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <h1>This is a modal</h1>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button onClick={this.handleClose}>Close</button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default ModalTest;