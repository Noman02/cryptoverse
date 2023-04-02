import React from 'react'
import {Button,Menu,Typography,Avatar}from "antd"
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
import {Link} from "react-router-dom"
import cryptocurrency from "../assets/cryptocurrency.png"
import MenuItem from 'antd/es/menu/MenuItem'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={cryptocurrency} size={"large"}/>
            <Typography.Title className='logo' level={2}>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'></Button> */}

        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>

        </Menu>
    </div>
  )
}

export default Navbar