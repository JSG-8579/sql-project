
<template>
  <ul class="home">
   <li v-for="item in data" :key="item.num">
    {{ item.name }}
    <button @click="setData({name:'재수정이름', email:'수정@naver.com', num:item.num})">수정</button>
    <button @click="delData(item.num)">삭제</button>
   </li>
  </ul>

  <button @click="postData({name:'우준하', email:'wjh@naver.com'})">
    저장
  </button>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue
// import { fetch } from '@/api/TestMember' 스토어로 이동


//store에 CRUD에 관련해서 요청
import { mapState, mapMutations } from "vuex";

export default {
  name:'HomeView',

  components: {
  },
  computed:{
    ...mapState('testMember',['data'])
  },
  methods:{
    ...mapMutations('testMember',['getData', 'postData', 'setData', 'delData'])
    // async fetch(){
    //   const data = await axios('http://localhost:3000/vue')
    //   console.log('----', data.data)
    // }

  },
  created(){
    this.getData()
    console.log('1111-----------',this.data)
  },
  mounted(){
    console.log('22222-----------',this.data)
  }

  // created(){ 스토어로 이동
  //   fetch()
  // }
}
</script>
