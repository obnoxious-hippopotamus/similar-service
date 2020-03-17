import React from 'react';
import Details from './Details.jsx';
import Descriptions from './Descriptions.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
    constructor() {
      super();


    }


    componentDidMount() {

    }

    render() {
      return (
        <div>
          <main className="mainHeader" >Customers who watched this item also watched</main>
            <div className="wrapper" >
              <div className="movieWheel">Movie Wheel</div>
              <div className="moreDetailsHeader">More details</div>
              <Details className="details"/>
              {/* <MovieWheel className="movieWheel" /> */}
              <Descriptions className="description"/>
              <Footer className="footer" />
            </div>
        </div>
      )
    }  
};





export default App;