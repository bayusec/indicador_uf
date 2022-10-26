<?php

namespace App\Http\Controllers;

use App\Models\Uf;
use Illuminate\Http\Request;

class UfController extends Controller
{

    public function allUfs(){
        return Uf::orderBy('fechaIndicador','desc')->get();
    }

    public function createUf(Request $request){
        $validated = $request->validate([
            'fechaIndicador'=>'required',
            'valorIndicador'=>'required',
        ]);

        $uf = new Uf;
        $uf->nombreIndicador="UNIDAD DE FOMENTO (UF)";
        $uf->codigoIndicador="UF";
        $uf->unidadMedidaIndicador="Pesos";
        $uf->origenIndicador="mindicador.cl";
        $uf->fechaIndicador=$request->fechaIndicador;
        $uf->valorIndicador=$request->valorIndicador;
        $uf->save();

    }

    public function UfBetween(Request $request)
    {
        $validated = $request->validate([
            'from'=>'required',
            'to'=>'required'
        ]);

        $from = $request->from;
        $to = $request->to;
        $uf = Uf::whereBetween('fechaIndicador', [$from, $to])->orderBy('fechaIndicador','asc')->get();

        return $uf;

    }

    public function updateUf(Request $request)
    {
        $validated = $request->validate([
            'fechaIndicador'=>'required',
            'valorIndicador'=>'required',
        ]);

        $id = $request->id;
        $uf = Uf::findOrFail($id);
        $uf->valorIndicador=$request->valorIndicador;
        $uf->save();

    }

    public function deleteUf(Request $request)
    {
        $id = $request->id;
        $uf= Uf::find($id);
        $uf->delete();
    }

}
