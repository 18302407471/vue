const user = {
  state:{
     name: ""
  },
  mutations:{
    setName:(state, name) =>{
      console.log(state,name);
       state.name = name
    }
  },
  actions:{
      commitName({commit}, name){
        commit("setName", name)
      }
  }
}
export default user