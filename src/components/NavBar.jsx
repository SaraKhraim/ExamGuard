import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;
const NavBar = () => {
    
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Logo/>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Menu mode="horizontal" style={{ width: '114px' }}>
          <Menu.Item key="about" icon={<QuestionCircleOutlined />}>
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
    </div>
    );
};

export default NavBar;