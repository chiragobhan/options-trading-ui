import React, { useState } from 'react';
import { Card, Avatar, Button, Row, Col, Drawer, Tag, Slider, InputNumber, Statistic } from 'antd';
import './NewTrades.css';

function NewTrades() {
const { Meta } = Card;
const [visible, setVisible] = useState(false);
const [quantityInput, setQuantityInput] = useState(1);
const [priceInput, setPriceInput] = useState(0.5);
const showDrawer = () => {
    setVisible(true);
};
const onClose = () => {
    setVisible(false);
};
const changeQuantity = (value) => {
    setQuantityInput(value);
};
const changePrice = (value) => {
    setPriceInput(value);
};

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
                    <div className="tradeActions">
                        <div className="tradeAction">
                            <div className="tradeFill tradePrimaryFill">₹ 4</div>
                            <Button onClick={showDrawer} className="primary-btn" default shape="round" size="large">Yes</Button>
                        </div>
                        <div className="tradeAction">
                            <div className="tradeFill tradeDangerFill">₹ 6</div>
                            <Button onClick={showDrawer} danger shape="round" size="large">No</Button>
                        </div>
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
                    <div className="tradeActions">
                        <div className="tradeAction">
                            <div className="tradeFill tradePrimaryFill">₹ 4</div>
                            <Button onClick={showDrawer} className="primary-btn" default shape="round" size="large">Yes</Button>
                        </div>
                        <div className="tradeAction">
                            <div className="tradeFill tradeDangerFill">₹ 6</div>
                            <Button onClick={showDrawer} danger shape="round" size="large">No</Button>
                        </div>
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
                    <div className="tradeActions">
                        <div className="tradeAction">
                            <div className="tradeFill tradePrimaryFill">₹ 4</div>
                            <Button onClick={showDrawer} className="primary-btn" default shape="round" size="large">Yes</Button>
                        </div>
                        <div className="tradeAction">
                            <div className="tradeFill tradeDangerFill">₹ 6</div>
                            <Button onClick={showDrawer} danger shape="round" size="large">No</Button>
                        </div>
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
                    <div className="tradeActions">
                        <div className="tradeAction">
                            <div className="tradeFill tradePrimaryFill">₹ 4</div>
                            <Button onClick={showDrawer} className="primary-btn" default shape="round" size="large">Yes</Button>
                        </div>
                        <div className="tradeAction">
                            <div className="tradeFill tradeDangerFill">₹ 6</div>
                            <Button onClick={showDrawer} danger shape="round" size="large">No</Button>
                        </div>
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
                    <div className="tradeActions">
                        <div className="tradeAction">
                            <div className="tradeFill tradePrimaryFill">₹ 4</div>
                            <Button onClick={showDrawer} className="primary-btn" default shape="round" size="large">Yes</Button>
                        </div>
                        <div className="tradeAction">
                            <div className="tradeFill tradeDangerFill">₹ 6</div>
                            <Button onClick={showDrawer} danger shape="round" size="large">No</Button>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>

        <Drawer 
          className="tradeDrawer"
          title="This is a test title to see how a long question will look? Do you think it looks good?"
          placement="bottom"
          width={500}
          onClose={onClose}
          visible={visible}
        >
            <div className="tradeSubmissionDrawer">
                <span>You are trading for </span><Tag color="#1da1f2" style={{fontSize: '16px', borderRadius: '20px'}}>Yes</Tag>
                <div className="tradeInput">
                <Row style={{justifyContent: 'center', marginBottom: '10px'}}>
                    <Col span={14}>
                        <span className="sliderText">Quantity</span>
                        <Slider
                            min={1}
                            max={100}
                            onChange={changeQuantity}
                            value={typeof quantityInput === 'number' ? quantityInput : 0}
                        />
                    </Col>
                    <Col span={6}>
                    <InputNumber
                        min={1}
                        max={100}
                        style={{ margin: '0 16px' }}
                        value={quantityInput}
                        onChange={changeQuantity}
                    />
                    </Col>
                </Row>
                <Row style={{justifyContent: 'center', marginBottom: '10px'}}>
                    <Col span={14}>
                        <span className="sliderText priceText">Price</span>
                        <Slider
                            min={0.5}
                            max={9.5}
                            onChange={changePrice}
                            value={typeof priceInput === 'number' ? priceInput : 0}
                            step={0.5}
                        />
                    </Col>
                    <Col span={6}>
                    <InputNumber
                        min={0.5}
                        max={9.5}
                        style={{ margin: '0 16px' }}
                        value={priceInput}
                        onChange={changePrice}
                        step={0.5}
                    />
                    </Col>
                </Row>
                </div>
                <Row style={{width: '70%', padding: '15px', marginTop: '25px'}} className="tradeInput">
                    <Col span={12}>
                        <Statistic title="Total Amount" value={1000} precision={1} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Potential Win" value={1000} precision={1} />
                    </Col>
                </Row>
                <Button style={{marginTop: '10px'}} type="primary" shape="round" size="large">
                    Trade for Yes
                </Button>
                <div className="tradeDrawerFooter">
                    <span style={{padding: '5px'}}>Available Balance: ₹0.00</span>
                    <span style={{padding: '5px'}}>Commission: ₹0.00</span>
                </div>
            </div>
        </Drawer>
    </div>
  );
}

export default NewTrades;