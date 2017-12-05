import * as d3 from 'd3';

const viz = d3.select("#viz");
const height = 619;
const width = 1100;

const yearParser = d3.timeParse("%Y");

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range(height, 0);

viz.append("g").attr("transform", `translate(0,${height})`);

d3.csv('../data/women_in_gov_clean.csv', (data) => {
  const tranches = data.columns.slice(1).map( (id) => {
    return {
      id: id,
      values: data.map( (d) => {
        return {year: d["Year"], share: parseFloat(d[id])};
      })
    };
  });

  x.domain(d3.extent(data, (d) => d.date));
  y.domain([0, 50]);
});
