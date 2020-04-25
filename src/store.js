import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
   siteName: 'A very awesom site',
   pageName: 'home',
   products: [ 
    {
        grade: "JSS one",
        },
        {
            grade: "JSS two",
            },
            {
                grade: "JSS three",
                },
                {
                    grade: "SSS one",
                    },
                    {
                        grade: "SSS two",
                        },
                        {
                            grade: "SSS three",
                            },
                                          
                               {
                                    grade: "JSCE prep",
                                    },
                                    {
                                        grade: "SSCE prep",
                                        },
                                        {
                                            grade: "JAMB prep",
                                            },
                                                                    
   
  ], 
   selectedProduct:null
    },
    mutations: {
        changePageName(state,data){
           state.pageName = data;
        },
        setSelectedProductValue(state, product){
        state.selectedProduct = product;
        }
    }
});

    export default store;