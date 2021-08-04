import{ Row, Col } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MenuLanguage = (props) => {
  return (
    <Menu onClick={(e) => props.change(e.key)}>
      <Menu.Item key="vi">
        Vietnamese
      </Menu.Item>
      <Menu.Item key="en-US">
        English
      </Menu.Item>
    </Menu>
  )
}

const SwitchLanguage = (props)=> {
  return (
    <Row style={{ margin: '20px 0px'}}>
      <Col span={20} offset={2}>
        <Dropdown overlay={<MenuLanguage change={props.change} />}>
          <Button>
            Change language <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  )
}
export default SwitchLanguage;