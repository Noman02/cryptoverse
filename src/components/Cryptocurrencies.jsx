import React, { useEffect, useState } from 'react'
import {useGetCryptosQuery} from "../services/cryptoApi"
import { Card, Col, Input, Row } from 'antd'
import { Link } from 'react-router-dom'
import millify from 'millify'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10: 100;
  const {data:cryptosList,isFetching}=useGetCryptosQuery(count)
  const [cryptos,setCryptos]=useState(cryptosList?.data?.coins)
  const [searchTerm,setSearchTerm]=useState("")

  useEffect(()=>{
    const filteredData= cryptosList?.data?.coins.filter(coin=>coin.name.toLowerCase().includes(searchTerm))
    setCryptos(filteredData)
  },[cryptosList,searchTerm])

  if(isFetching)return "Loading..."

  return (
    <>
    {
      !simplified&&
     <>
    <div className='search-crypto'>
      <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
    </div>
    <h2 className='heading'>All Cryptocurrencies</h2>
     </>
    
    }
      
      <Row gutter={[32,32]} className='crypto-card-container'>
        {
          cryptos?.map(currency=>(
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
              <Link  to={`/crypto/${currency.uuid}`}> 
                <Card
                title={`${currency.rank}.${currency.name}`} 
                extra={<img className='crypto-image' src={currency.iconUrl} alt="/"/>}
                hoverable
                >
                  <p>Price:{millify(currency.price)}</p>
                  <p>Market Cap:{millify(currency.marketCap)}</p>
                  <p>Daily Change:{millify(currency.change)}%</p>

                </Card>
              </Link>
            </Col>
          ))
        }

      </Row>
    </>
  )
}

export default Cryptocurrencies