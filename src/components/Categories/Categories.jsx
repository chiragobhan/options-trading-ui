import { Card, Avatar } from 'antd';
import './Categories.css';

function Categories() {
  const { Meta } = Card;
  return (
    <div>
      <Card
            className="categoryList"
          >
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/7756/7756321.png" className="categoryIcon" />}
            title="Category 1"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn4.iconfinder.com/data/icons/random-112/750/Random-20-512.png" className="categoryIcon" />}
            title="Category 2"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/6662/6662916.png" className="categoryIcon" />}
            title="Category 3"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-2/256/Random_Sampling-512.png" className="categoryIcon" />}
            title="Category 4"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/7118/7118353.png" className="categoryIcon" />}
            title="Category 5"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="categoryIcon" />}
            title="Category 6"
          />
          <Meta
            className="category"
            avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/15441/15441449.png" className="categoryIcon" />}
            title="Category 7"
          />
          </Card>
    </div>
  );
}

export default Categories;