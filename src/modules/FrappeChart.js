import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

function FrappeChart(value) {


  new Chart("#root", {
    // or DOM element
    data: {
      labels: [
        `${value} people waiting in queue`
      ],

      datasets: [
        {
          name: "Some Data",
          chartType: "bar",
          values: [value]
        },

      ],

      yMarkers: [{ label: "People in queue", value: `${value}`, options: { labelPos: "left" } }],
    },

    title: "Foor bar queue list",
    type: "bar", // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ["orange", "#ffa3ef", "light-blue"],
    axisOptions: {
      xAxisMode: "tick",
      xIsSeries: true
    },
    barOptions: {
      stacked: false,
      spaceRatio: 0.5
    },
    tooltipOptions: {
      formatTooltipX: (d) => (d + "").toUpperCase(),
      formatTooltipY: (d) => d + " pts"
    }
  });
}

export default FrappeChart;
