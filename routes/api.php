<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UfController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/ufs',[UfController::class,'allUfs']);
Route::post('/ufsRange',[UfController::class,'UfBetween']);
Route::post('/uf',[UfController::class,'createUf']);
Route::put('/uf/{id}',[UfController::class,'updateUf']);
Route::delete('/uf/{id}',[UfController::class,'deleteUf']);
