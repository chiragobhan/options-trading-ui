import { Card, Avatar} from 'antd';
import './Profile.css'

function profile() {
    const { Meta } = Card;
    return (
        <div>
            <Card
                className="categoryList"
            >
            <Meta
                className="category"
                avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/6662/6662916.png" className="categoryIcon" />}
            />
            This is the profile page!
            </Card>
        </div>
    );
}

export default profile;