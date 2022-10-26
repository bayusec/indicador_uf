<template>
    <div class="flex flex-col mt-10 items-center">
        <label for="my-modal-4" class="btn modal-button">Agregar Registro UF</label>

        <input type="checkbox" ref="actionModal" id="my-modal-4" class="modal-toggle"/>
        <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative p-5" for="iForm">
                <div class="w-full pt-5 text-center ">
                        <UfForm id-form="iForm" @fire="storeUf"></UfForm>
                </div>
            </label>
        </label>

        <div class="overflow-x-auto mt-5 w-[65%]">
            <table class="table w-full font-lora text-xl font-bold">
                <!-- head -->
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr class="hover" v-for="uf of state.arrUfs">
                    <th>{{ uf.id }}</th>
                    <td>{{ uf.fechaIndicador.split(" ")[0] }}</td>
                    <td>{{ precioEnPesos(uf.valorIndicador) }}</td>
                    <td class="text-right ">
                        <label for="editModal" class="btn modal-button bg-amber-200 hover:bg-amber-300 mr-10 text-stone-500 hover:text-white"
                               @click="fillEdit(uf)">Editar</label>
                        <button class="btn bg-red-900 hover:bg-red-500 text-white hover:text-black" @click="deleteCasa(uf.id)">Borrar</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" ref="editModal" id="editModal" class="modal-toggle"/>
        <label for="editModal" class="modal cursor-pointer">
            <label class="modal-box relative p-5" for="eForm">
                <div class="w-full pt-5 text-center">
                    <UfForm id-form="eForm" @fire="editUf"></UfForm>
                </div>
            </label>
        </label>
    </div>
</template>

<script setup>
import {useApiStore} from "../store/ApiStore.js"
import {ref, onMounted, reactive} from "vue";
import {getNode, reset, createMessage} from '@formkit/core'
import {useFormLoading} from "@/composables/FormkitLoading.js";
import UfForm from "../components/UfForm.vue";


const apiStore = useApiStore()
const formLoading = useFormLoading()
const actionModal = ref(null)
const editModal = ref(null)

const state = reactive({
    arrUfs: [],
});


async function storeUf() {
    const node = getNode('iForm')
    formLoading.setFormLoadingOn(node)
    const payload = node.value
    const res = await apiStore.storeModel('uf', payload)
    await loadUf()
    reset("iForm")
    formLoading.setFormLoadingOff(node)
    actionModal.value.click();

    //si no se actualiza el arrUf, lo debemos injectar manualmente o traer mediante this.loadCasas
}

async function loadUf() {
    try {
        const res = await apiStore.getAllModel('ufs')
        state.arrUfs = res
    } catch (e) {
        console.log(e)
        throw {"error": e}
    }
}

async function editUf() {
    const node = getNode('eForm')
    formLoading.setFormLoadingOn(node)
    const payload = node.value
    console.log(payload)
    await apiStore.editModel('uf', payload)
    await loadUf()
    reset('eForm')
    formLoading.setFormLoadingOff(node)
    editModal.value.click();

}

async function deleteCasa(id) {
    await apiStore.deleteModel('uf', id)
    await loadUf()
}


function fillEdit(uf) {
    uf.fechaIndicador = uf.fechaIndicador.split(" ")[0]
    reset('eForm', uf)
}

const precioEnPesos = ((precio)=>{
    return new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(precio)
})

onMounted(() => {
    loadUf()
})

</script>

<style scoped>

</style>
