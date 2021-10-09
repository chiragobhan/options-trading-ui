import { Card } from 'antd';
import './Categories.css';

const gridStyle = {
  width: '90px',
  borderRadius: '100%',
  margin: '15px',
  padding: '32px',
  cursor: 'pointer'
};

function Categories() {
  return (
    <Card title="Select a category to filter the trades" className="categoryList">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
}

export default Categories;