import * as d3 from 'd3';

const viz = d3.select("#viz");
const height = 1100;
const width = 619;

const parser = d3.timeParse("%Y");

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range(height, 0);

// const valueLine = d3.line()
//                     .x( (d) => x(d.))
//                     .y( (d) => y(d.))
d3.csv('../data/women_in_gov.csv', (data) => {
  console.log(data);
});
