import { fetch } from '@/api/TestMember'
//상태관리 => api

export const testMember = {
    namespaced:true,

    state: {
        data:'test-member'
    },
    getters: {
    },
    mutations: {
        async getData(state){
            const res = await fetch.get();
            state.data = res;
        },

        async postData(state, value){
            await fetch.post(value);
            const res = await fetch.get();
            // console.log('state.data',state.data)
            // const lastNum = state.data.length -1
            // const num = state.data[lastNum].num
            // console.log('num',num)
            // state.data.push({...value,num:num+1});
            state.data = res; 
        },

        async setData(state, value){
            const data = [...state.data]
            await fetch.put(value);
            const set = data.map((obj)=>{
                console.log(obj)
                if(obj.num == value.num){
                    obj.name = value.name;
                    obj.email = value.email;
                }
                return obj
            })
            state.data = set;
        },

        async delData(state, num){
            await fetch.delete(num);
            const data = [...state.data]
            const set = data.filter((obj)=>obj.num != num)
            console.log('set', set)
            state.data = set; 
        }

    },
    actions: {
    }
}