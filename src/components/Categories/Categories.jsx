import { Card } from 'antd';
import './Categories.css';

const gridStyle = {
  borderRadius: '100%',
  margin: '15px',
  cursor: 'pointer'
};

function Categories() {
  return (
    <Card title="Select a category to filter the trades" className="categoryList">
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
        <Card.Grid style={gridStyle}><img style={{width: '65px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Card.Grid>
    </Card>
  );
}

export default Categories;