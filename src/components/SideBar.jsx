import React from 'react';
import {Layout} from 'antd';
import "./SideBar.css";
import Logo from './Logo';
import MenuList from './MenuList';

const SideBar = () => {
    const { Header, Sider }= Layout;
    return(
        <Layout className='out'>
            <Sider className='sidebar'>
                
                <MenuList/>

            </Sider>
        </Layout>
    );
};

export default SideBar;