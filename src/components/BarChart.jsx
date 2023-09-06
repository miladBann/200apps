import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


function BarChart({passed, failed}) {
  
  const svgRef = useRef(null);

  useEffect(() => {
    // Data for the bars
    const data = [
      { label: 'Dark Blue', value: failed },
      { label: 'Gray', value: passed },
    ];

    // Define chart dimensions
    const width = 200;
    const height = 180;

    // Create an SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Define scales for x and y axes
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([40, width - 40])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, 30])
      .range([height, 0]);

    // Create and append bars to the chart
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', 20)
      .attr('height', d => height - yScale(d.value))
      .attr('fill', d => (d.label === 'Dark Blue' ? '#002266' : '#e4eaf2'));

    // Create and append y-axis
    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${width - 40}, 0)`)
      .call(d3.axisRight(yScale).ticks(6).tickSize(-width + 80).tickPadding(5));

    // Remove x-axis labels
    svg.select('.domain').remove();
  }, []);

  return (
    <div className="chart_cont">
      <div className="status_content">
        <h2>Student Success in lesson 2</h2>

        <div className="chart">

          <div className='labels_cont'>
            <div className='top_cont'>
              <h4>Success</h4>
              <div className='color_square'></div>
            </div>

            <div className='bottom_cont'>
              <h4>Failure</h4>
              <div className='color_square'></div>
            </div>
          </div>

          <svg ref={svgRef}></svg>
        </div>

      </div>
    </div>
  );
}

export default BarChart;
