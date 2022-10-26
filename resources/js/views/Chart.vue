<template>
    <div class="flex flex-col mt-10 items-center border  bg-transparent mx-auto rounded p-10 gap-10">
        <div class="flex flex-rows gap-10 items-center">
            <FormKit
                type="date"
                name="from"
                label="Fecha Desde"
                validation="required"
                validation-visibility="live"
                input-class="rounded p-2"
                v-model="state.from_date"
            />

            <FormKit
                type="date"
                name="to"
                label="Fecha Hasta"
                input-class="rounded p-2"
                validation="required"
                validation-visibility="live"
                v-model="state.to_date"
            />

            <FormKit
                type="button"
                label="Filtrar"
                input-class="btn"
                @click="updateChart"
            />
        </div>
        <canvas id="myChart" width="800" height="500"></canvas>
    </div>
</template>

<script setup>
import {reactive, onMounted, computed} from 'vue'
import {Chart, registerables} from 'chart.js';
import {useApiStore} from "../store/ApiStore.js"

const apiStore = useApiStore()
Chart.register(...registerables);

let config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Precio UF',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    }
}

let ctx = ""
let myChart = ""

const state = reactive({
    to_date: new Date(),
    from_date: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    arrDates: [],
    valores: [],
    dias: [],
})

async function loadUfs() {
    try {
        const payload = {from: state.from_date.toISOString(), to: state.to_date.toISOString()}
        const res = await apiStore.getRangeModel('ufsRange', payload)
        state.arrDates = res
        fillConfig()


    } catch (e) {
        console.log(e)
        throw {"error": e}
    }
}

function loadChart(){
    ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, config)
}


function fillConfig(){
    state.valores = state.arrDates.map((e) => e.valorIndicador)
    state.dias = state.arrDates.map((e) => e.fechaIndicador.split(" ")[0])

    config.data.labels = state.dias
    config.data.datasets[0].data = state.valores
    myChart.update()
}

function updateChart() {
    state.from_date = new Date(state.from_date)
    state.to_date = new Date(state.to_date)
    loadUfs()
}

onMounted(() => {
    loadUfs()
    loadChart()
})

</script>

<style scoped>

</style>
