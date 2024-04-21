import React, { useState } from 'react';
import { Menu } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const MenuList = () => {
  // Dummy data for faculties and their classrooms
  const faculties = [
    {
      name: 'Engineering',
      classrooms: ['301', '302', '303', '304', '305', '306', '307', '308']
    },
    {
      name: 'IT',
      classrooms: ['201', '202', '203', '204', '205', '206','207','208']
    },
    {
      name: 'Business',
      classrooms: ['811', '812', '813', '814', '815', '816', '817', '818']
    }
  ];

  // State to keep track of open submenus
  const [openKeys, setOpenKeys] = useState([]);

  // Handler for submenu open/close
  const handleOpenChange = keys => {
    setOpenKeys(keys);
  };

  

  return (
    <div style={{ position: 'fixed', top: '200', left: '0', width: '200px' }}>
      <Menu
      mode="inline"
      defaultOpenKeys={openKeys}
      onOpenChange={handleOpenChange}
    >
      {faculties.map((faculty, index) => (
        <SubMenu key={`faculty-${index}`} title={faculty.name} icon={<ReadOutlined />}>
          {faculty.classrooms.map((classroom, idx) => (
            <Menu.Item key={`classroom-${index}-${idx}`}>
              <Link to={`/classroom/${classroom}`}>{classroom}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>

    </div>
    
  );
};

export default MenuList;
