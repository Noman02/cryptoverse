import React from 'react'
import { Routes,Route, Link}from "react-router-dom"
import {Layout, Typography,Space} from "antd"
import "./App.css"

import {Navbar,Homepage,Cryptocurrencies,CryptoDetails,News}from "./components"

const App = () => {
  return (
   <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
      <Layout>
        <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage/>}>
                
              </Route>
              
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}>
                
              </Route>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails/>}>
                
              </Route>
              <Route exact path='/news' element={<News/>}>
                
              </Route>
            </Routes>
        </div>
      </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
          <span>Crypto Hub</span> <br/>
          <span>All rights reserved.</span>
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
   </div>
  )
}
export default App