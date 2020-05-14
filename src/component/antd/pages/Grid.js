// antd Grid
import React from 'react'
import { Row, Col } from 'antd';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class GridDemo extends React.Component {

    render() {
        return (
            <>
                <div>
                    <p>Flex 子元素垂直对齐,Align Center</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4} style={{ background: "yellow" }}>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4} style={{ background: "yellow" }}>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4} style={{ background: "yellow" }}>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4} style={{ background: "yellow" }}>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop:"30px"}}>
                    <p>响应式布局,预设六个响应尺寸：xs sm md lg xl  xxl。</p>
                    <Row>
                    <Col 
                    // pull={3}
                    xs={2} sm={4} md={6} lg={8} xl={10} style={{ background: "blue" }}>
                        Col
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ background: "skyblue" }}>
                        Col
                    </Col>
                    <Col 
                    // push={3}
                    xs={2} sm={4} md={6} lg={8} xl={10} style={{ background: "blue" }}>
                        Col
                        
                    </Col>
                </Row>
                </div>
            </>
        );
    }
}

export default GridDemo;








