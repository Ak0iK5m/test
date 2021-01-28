<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>arael</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet">
    <!-- Styles -->




    <style>
     *{
            margin: 0px;
            padding: 0px;
    }
        html,body {
            display: flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            height: 100vh;
            width: 100vw;
            padding: 0;
            margin: 0 auto;
            font-size: 4vm;
            font-family: 'Noto Sans JP', sans-serif;
            position: fixed;
            letter-spacing: 3px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li a {
            height: 50px;
            width: 100%;
            color: white;
            text-align: left;
            font-size: 100%;
            display: block;
            text-decoration: none;
            padding-left: 20px;
        }
        /*サイドメニュー*/
        .side-menu {
            width: 18vw;
            height: 100vh;
            background-color: #62ABB6;
        }
        .side-menu>ul>li>a {
            display: flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            align-items: center;
        }
        /*main-menu: folder +  main-contents*/
        .main-menu {
            display: flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            height: 100vh;
            width: calc(100vw - 18vw);
        }

        /*main-contents: header + main-items*/
        .main-contents {
            height: 100vh;
            /* width: 58vw; */
            width:82vw;
            background-color: gray;
        }
        
        .my-header {
            /* width: 64vw; */
            width:82vw;
            height: 80px;
            background-color: #E9F2F3;
            color: #8aa0a0;
            display: flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            margin-left: 0;
        }

        .my-header > button {
            background-color:#00697A;
            width: 70px;
            height: 70px;
            border-radius: 0 5px 5px 0;
            border:none;
            margin-top:10px;
            font-size: 40px;
            font-weight:400;
            color:#FFF;
        }
        /*main-item*/
        .main-item {
            background-color: #FFFFFF;
            height:100vh;
            width:82vw;
            position: absolute;
            overflow-y: scroll;
            overflow-x: hidden;
            text-align:center;
        }

        h2{
            color: #8aa0a0;
            font-weight:400;        
        }

        .input-edit{
            display: flex;
            flex-direction: row;
        }

        .input-table{
            margin:1vw;
            margin-left:3vw;
            color:#00697A;
        }

        .input-table > tr{
            text-align: left;
            width:35px;
        }

        .input-table > tr > td {
            padding:2vw;
            padding-left:1vw;
            font-size:1.3vw;
        }
        .td-input > input {
            height: 30px;
            width:300px;
        }

        .img-edit{
            margin:1vw;
            display: flex;
            flex-direction: column;
        }

        
        .img-show{
            /* width:200px;
            height:200px; */
            width:18vw;
            height: 18vw;
            border:1px solid #CCE3E3;
            /* vertical-align: middle; */
        }

        .img-show > .fa-user{
            font-size: 3vw;
            color:#00697A;
            /* text-align:center;
            justify-content: center; */
            margin-top: 7vw;
        }

        label[for=img-change]{
            padding:10px;
            margin:10px;
            background-color: #00B7B7;
            color:#FFF;
            border-radius: 5px;
        }
        #img-chage{
            display:none;
            
        }

        .btn-col{
            display: flex;
            flex-direction: row;
        }

        .btn-col > button {
            background-color: #E47E7E;
            border:none;
            border-radius: 5px;
            margin:10px;
            width:100px;
            height: 47px;
            color:#FFF;
            font-size:16px;
        }
        
    </style>

</head>

<body>
    <div class="side-menu">
        <ul>
            <li><a href="#"><i class="fas fa-home"></i><span>ホーム</span></a></li>
            <li><a href="#"><i class="fas fa-tasks"></i><span>タスク</span></a></li>
            <li><a href="#"><i class="far fa-comment-alt"></i><span>トーク</span></a></li>
            <li><a href="#"><i class="fas fa-book-open"></i><span>ノート</span></a></li>
            <li><a href="#"><i class="far fa-folder"></i><span>ファイル共有</span></a></li>
            <li><a href="#"><i class="far fa-file-alt"></i><span>レポート</span></a></li>

        </ul>
    </div>
    <div id="account_edit"></div>
    <script src="{{asset('/js/app.js')}}"></script>
   
</body>

</html>