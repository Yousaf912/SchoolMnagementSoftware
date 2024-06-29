import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Class One',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Class Two',
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Class Three',
    uv: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Class Foure',
    uv: 780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Class Five',
    uv: 190,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Class Six',
    uv: 290,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Class Seven',
    uv: 390,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x:any, y:any, width:any, height:any) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props:any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Map() {
  return (
    <BarChart
      width={800}
      height={350}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

Map.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
