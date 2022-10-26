import axios from 'axios'

export const session = axios.create({
    baseURL: '/api/',
    withCredentials: true // required to handle the CSRF token
});

// session.interceptors.response.use(function (response) {
//         return response;
//     },
//     async function (error) {
//         console.log(error.response.status)
//         if (error.response.status==401 || error.data.message.includes("Unauthenticated")) {
//             console.log("ENTRO AL ERROR: store "+authStore.isLogged)
//             const token = await session.get(import.meta.env.VITE_API_URL+'/api/csrf-cookie')
//             console.log("asd:::"+ token)
//             console.log("test:::" + token.data)
//             authStore.isLogged=false
//             // APIHelper.logout()
//             localStorage.setItem("isLogged", false)
//             authStore.router.push('/login')
//         }
//         return Promise.reject(error);
//     }
// )

export default {
    getAllModel: async function (model) {
        return await session.get('/' + model)
    },
    getModelById: async function (model, payload) {
        return await session.get(`/${model}/${payload.id}`)
    },
    storeModel: async function (model, payload) {
        return await session.post(`/${model}`, payload)
    },
    updateModelById: async function (model, payload) {
        return await session.put(`/${model}/${payload.id}`, payload)
    },
    deleteModelById: async function (model, id) {
        return await session.delete(`/${model}/${id}`)
    },
    getRangeModel: async function (model, payload) {
        return await session.post(`/${model}`, payload)
    }

}
