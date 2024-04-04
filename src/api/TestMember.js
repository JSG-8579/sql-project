// api/TestMember.js

//서버에 요청
import axios from 'axios';

export const fetch= {
    create:async ()=>{
        const res = await axios('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/vue/create')
        return res.data
    },

    get:async ()=>{
        const res = await axios('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/vue')
        // console.log(res.data)
        return res.data
    },

    post:async (value)=>{
        const res = await axios.post('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/vue/',value)
        // console.log(data.data)
        return res.data
    },

    put:async (value)=>{
        const res = await axios.put('https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/vue/update',value)
        // console.log(data.data)
        return res.data
    },

    delete:async (num)=>{
        const res = await axios.delete(`https://port-0-sql-server-o0ynn2alrk7bxxu.sel5.cloudtype.app/vue/delete?num=${num}`)
        // console.log(data.data)
        return res.data
    }
  }