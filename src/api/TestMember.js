// api/TestMember.js

//서버에 요청
import axios from 'axios';

export const fetch= {
    create:async ()=>{
        const res = await axios('http://localhost:3000/vue/create')
        return res.data
    },

    get:async ()=>{
        const res = await axios('http://localhost:3000/vue')
        // console.log(res.data)
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post('http://localhost:3000/vue/',value)
        // console.log(data.data)
        return res.data
    },

    put:async (value)=>{
        const res = await axios.put('http://localhost:3000/vue/update',value)
        // console.log(data.data)
        return res.data
    },

    delete:async (num)=>{
        const res = await axios.delete(`http://localhost:3000/vue/delete?num=${num}`)
        // console.log(data.data)
        return res.data
    }
  }