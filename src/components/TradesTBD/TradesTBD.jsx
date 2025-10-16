import { Card, Avatar, Row, Col } from 'antd';
import './../NewTrades/NewTrades.css';
import './TradesTBD.css';

function TradesTBD() {
const { Meta } = Card;

return (
    <div>
        <Row gutter={[16, 24]}>
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p style={{color: "#f93d4b"}} className="tradeResults">You traded <b>₹47</b> for <b>NO</b> </p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p style={{color: "#f93d4b"}} className="tradeResults">You traded <b>₹47</b> for <b>NO</b> </p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p style={{color: "#1da1f2"}} className="tradeResults">You traded <b>₹47</b> for <b>YES</b> </p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p style={{color: "#1da1f2"}} className="tradeResults">You traded <b>₹69</b> for <b>YES</b> </p>
                    </div>
                </Card>
            </Col>
            
            <Col sm={{ span: 24}} md={{ span: 12}} lg={{ span: 8}}>
                <Card
                    style={{ borderRadius: '20px' }}
                    hoverable="true"
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="This is a test title to see how a long question will look? Do you think it looks good?"
                    />
                    <div>
                        <p style={{color: "#f93d4b"}} className="tradeResults">You traded <b>₹47</b> for <b>NO</b> </p>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
);
}

export default TradesTBD