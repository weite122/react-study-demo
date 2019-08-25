// import React, { Component } from "react";
// import Counters from "./components/counters";
// import NavBar from "./components/navbar";
// import "./App.css";

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleIncrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };
//   handleDecrement = counter => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value--;
//     this.setState({ counters });
//   };
//   handleReset = () => {
//     const counters = this.state.counters.map(c => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = counterId => {
//     const counters = this.state.counters.filter(c => c.id !== counterId);
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter(c => c.value > 0).length}
//         />
//         <main>
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onDelete={this.handleDelete}
//             onIncrement={this.handleIncrement}
//             onDecrement={this.handleDecrement}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;