import React from 'react';


const Descriptions = (props) => {
     console.log(props.info)
        if (props.info.length < 1) {
          return null;
        }
        return (
            <ul className="detailsValues">
                <li>{props.info[0].studio}</li>
                <li>PG-13 (Parents Strongly Cautioned)</li>
                <li>{props.info[0].producers}</li>
                <li>{props.info[0].supportingActors1}, {props.info[0].supportingActors2}, {props.info[0].supportingActors3}</li>
                <li>Stream instantly <a href="url">Details</a></li>
                <li>Prime Video (streaming online video)</li>
                <li>Available to watch on <a href="	http://www.amazon.com/gp/mas/dl/android?initiatePurchaseFlow=true&asin=B004FRX0MY">supported devices</a></li>
            </ul>
        )
}





export default Descriptions;