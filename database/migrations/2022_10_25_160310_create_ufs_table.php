<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ufs', function (Blueprint $table) {
            $table->id();
            $table->string("nombreIndicador");
            $table->char("codigoIndicador",2);
            $table->string("unidadMedidaIndicador");
            $table->unsignedBigInteger("valorIndicador");
            $table->timestamp("fechaIndicador")->useCurrent();
            $table->string("tiempoIndicador")->nullable();
            $table->string("origenIndicador");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ufs');
    }
};
