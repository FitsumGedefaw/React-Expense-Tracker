import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...values);
    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} />)}
        </div>
    )
};

export default Chart;