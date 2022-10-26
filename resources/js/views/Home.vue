<template>
    <div class="flex flex-col mt-10 items-center gap-10 ">
        <div class="w-[50%]">
            <h2 class="text-2xl font-bold">INICIO</h2>
            <div>Link Github:</div>
            <a href="https://github.com/bayusec/indicador_uf" target="_blank">
                https://github.com/bayusec/indicador_uf</a>
        </div>

        <div class="w-[50%]">
            <h2 class="text-2xl font-bold">Install</h2>
            <ul>
                <li class="">-composer install</li>
                <li class="">-npm install</li>
                <li class="">-Crear usuario mysql</li>
                <li class="">-Editar .env</li>
                <li class="">-mysql -u user -p dbname &lt; database/seeders/respaldo_registros.sql</li>
                <li class="">-php artisan migrate</li>
            </ul>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
