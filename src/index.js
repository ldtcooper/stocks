import * as d3 from 'd3';

const viz = d3.select("#viz");
const height = 619;
const width = 1100;

const yearParser = d3.timeParse("%Y");

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range(height, 0);

const lowIncomeLine = d3.line()
                    .x( (d) => x(d["Year"]))
                    .y( (d) => y(d["Low Income"]));

const lowMiddleLine = d3.line()
                    .x( (d) => x(d["Year"]))
                    .y( (d) => y(d["Lower Middle Income"]));

const upperMiddleLine = d3.line()
                    .x( (d) => x(d["Year"]))
                    .y( (d) => y(d["Upper Middle Income"]));

const highIncomeLine = d3.line()
                    .x( (d) => x(d["Year"]))
                    .y( (d) => y(d["High Income"]));

viz.append("g").attr("transform", `translate(0,${height})`);

d3.csv('../data/women_in_gov_clean.csv', (data) => {
  data.forEach( (d) => {
    d["Year"] = yearParser(d["Year"]);
  });

  x.domain(d3.extent(data, (d) => d["Year"]));
  y.domain([0, 50]);

  viz.append("g").call(d3.axisBottom(x));
});
