import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detailpage() {

    const {category,id}=useParams()
    const [data,setdata]=useState({})


    useEffect(()=>{


        const fetchSingleData=async()=>{


            const response = (`data/${category}/${id}`)

            const data = await response.json()

            setdata(data)

        }

        fetchSingleData()
    },[])


  return (
    <div>
<>
<h1>{data.title}</h1>
<img src={data.thumbnail} />

</>

      
    </div>
  )
}
