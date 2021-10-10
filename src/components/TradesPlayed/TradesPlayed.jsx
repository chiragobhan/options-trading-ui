import { Card, Avatar, Row, Col } from 'antd';
import './../NewTrades/NewTrades.css';
import './TradesPlayed.css';

function TradesPlayed() {
const { Meta } = Card;

return (
    <div>
        <Row gutter={[16, 24]}>
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px', background: 'linear-gradient(0deg,#e9f7fe,#e9f7fe)' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p className="tradeResults">You <b>won ₹47</b> in this trade</p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px', background: 'linear-gradient(0deg,#fbf0f3,#fbf0f3)' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p className="tradeResults">You <b>lost ₹69</b> in this trade</p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px', background: 'linear-gradient(0deg,#e9f7fe,#e9f7fe)' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p className="tradeResults">You <b>won ₹47</b> in this trade</p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px', background: 'linear-gradient(0deg,#fbf0f3,#fbf0f3)' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p className="tradeResults">You <b>lost ₹47</b> in this trade</p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px', background: 'linear-gradient(0deg,#fbf0f3,#fbf0f3)' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p className="tradeResults">You <b>lost ₹47</b> in this trade</p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
);
}

export default TradesPlayed