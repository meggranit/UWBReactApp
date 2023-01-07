import React from "react";
import Plot from "react-plotly.js";


class RoomOne extends React.Component {

  render() {

    return (

      <Plot

        data={[

          {

            x: [0, 0, 33, 33, 16.5],

            y: [0, 30, 30, 0, 15],

            type: "scatter",

            mode: "markers",

            marker: { color: "grey" },

          },

          

        ]}

        layout={{ width: 330, height: 300, title: "Room One" }}

      />
      

    );

  }

}

export default RoomOne;