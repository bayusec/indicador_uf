import {defineStore} from "pinia";
import request from '../composables/Request.js'

export const useApiStore = defineStore('ApiStore', {


    //podemos usar un state y en las actions poblar el state con this.name = data,,, luego en el componente llamaos al estado para no tener q usar await
    actions: {
        getRangeModel: async function(model, payload){
            try {
                const response = await request.getRangeModel(model, payload)
                const data = response.data
                if (response.status == 200) {
                    return data
                }
            } catch (e) {
                throw {"error": e}
            }
        },
        getAllModel: async function (model) {
            try {
                const response = await request.getAllModel(model)
                console.log("test")
                const data = response.data
                if (response.status == 200) {
                    return data
                }
            } catch (e) {
                throw {"error": e}
            }
        },
        getModelById: async function(model,payload){
            try {
                const response = await request.getModelById(model,payload)
                const data = response.data
                return data
            }
            catch (e) {
                throw {'error':e}
            }
        },
        storeModel: async function (model, payload) {
            try {
                const response = await request.storeModel(model, payload)
                const data = response.data
                if (response.status == 200) {
                    return data
                }
            }
            catch (e) {
                if (e.response.status == 401) {
                    authStore.logout()
                    throw {"error": "Invalid Credentials"}
                }
            }
        },
        editModel: async function(model,payload){
          try {
              const response = await request.updateModelById(model,payload)
              const data = response.data
              if(response.status == 200){
                  return data
              }
          }
          catch (e){
              throw {"error": e}
          }
        },
        deleteModel: async function (model,id){
            try{
                await request.deleteModelById(model,id)
            }
            catch (e){
                if(e.response.status==401){
                    authStore.logout()
                    throw {"error": "Invalid Credentials"}
                }
            }
        }
    }



    //getters

})
