import React, { useState } from 'react';
import { Menu, Modal } from 'antd';
import { UserOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from './Logo';
import { useNavigate, Link } from 'react-router-dom';


const { SubMenu } = Menu;
const NavBar = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }
   
    
    
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        
      <Link to="/homepage/default"> 
        <Logo />
      </Link>
      
      
      
      <div style={{ display: 'flex', gap: '10px' }}>
          <Menu mode="horizontal" style={{ width: '114px' }}>
              <Menu.Item key="about" icon={<QuestionCircleOutlined />} onClick={showModal}>
                  About Us
              </Menu.Item>
          </Menu>
          <Menu mode="horizontal" style={{ width: '56px' }}>
              <SubMenu key="admin" icon={<UserOutlined />}>
                  <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                      Logout
                  </Menu.Item>
              </SubMenu>
          </Menu>
      </div>
      <Modal
          title="About Us"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
      >
          <p>add info about examguard.</p>
      </Modal>
  </div>
    );
};

export default NavBar;