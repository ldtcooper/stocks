import * as d3 from 'd3';

const viz = d3.select("#viz");
const height = 619;
const width = 1100;

const yearParser = d3.timeParse("%Y");

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const g = viz.append("g").attr("transform", `translate(0,${height})`);

d3.csv('../data/women_in_gov_clean.csv', (data) => {
  const tranches = data.columns.slice(1).map( (id) => {
    return {
      id: id,
      values: data.map( (d) => {
        return {year: d["Year"], share: d[id] ? parseFloat(d[id]) : null};
      })
    };
  });

  console.log(tranches);

  x.domain(d3.extent(data, (d) => d.date));
  y.domain([0, 50]);

  g.append("g")
   .attr("class", "axis axis--x")
   .attr("transform", `translate(0,${height})`)
   .call(d3.axisBottom(x));

  g.append("g")
   .attr("class", "axis axis--y")
   .call(d3.axisLeft(y))
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 6)
   .attr("dy", "0.75em")
   .attr("fill", "black")
   .text("Proportion of Women in National Parliamant");

  const tranche = g.selectAll()

});
