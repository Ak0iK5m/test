<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/file_sharing', function () {
    return view('file_sharing');
});

Route::get('/talk', function () {
    return view('talk');
});

Route::get('/arael_home', function () {
    return view('arael_home');
});

Route::get('/feature_list', function () {
    return view('feature_list');
});

Route::get('/user_management', function () {
    return view('user_management');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

