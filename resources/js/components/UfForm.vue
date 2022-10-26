<template>
    <div class="text-white">
        <FormKit
            :id="idForm"
            type="form"
            submit-label="Guardar"
            @submit="$emit('fire')"
            :config="{classes: {label: 'text-left', wrapper: '$reset max-w-full mx-5', outer: '$reset mt-8', input: 'p-2 text-white w-full bg-transparent border-2 border-blue-300 rounded outline-none focus:border-blue-500',
                     inner:'mt-5', message:'text-red-400'}}"
            :submit-attrs="{inputClass: '',wrapperClass: 'btn bg-neutral-700 focus:bg-neutral-900 mt-8 max-w-full'}"
            incomplete-message="Por favor revisa que el formulario este bien llenado."
        >

            <FormKit
                type="date"
                name="fechaIndicador"
                label="Fecha"
                :disabled="idForm!=='iForm'"
                validation="required"
                validation-visibility="live"
                :input-class="idForm!=='iForm'? 'bg-gray-400 border-gray-400 text-black': ''"
            />

            <FormKit
                name="valorIndicador"
                type="number"
                label="Valor"
                validation="required|integer|numeric|min:1"
                validation-visibility="live"
                :validation-messages="{matches: 'El valor no puede estar vácio'}"
            />

        </FormKit>
    </div>
</template>

<script setup>
const props = defineProps({
    idForm: String
})

</script>

<style scoped>

</style>
