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
        /*main-item*/
        .main-item {
            background-color: #FFFFFF;
            /* height: calc(100vh - 180px); */
            height:100vh;
            /* width: 57.8vw; */
            width:82vw;
            /* top: 80px; */
            position: absolute;
            overflow-y: scroll;
            overflow-x: hidden;
            text-align:center;
        }

        h2{
            color: #8aa0a0;
            font-weight:400;        }
        
        .circle {
            /* width: 20px;
            height: 20px;
            border-radius: 50%;
            background: red;
            text-align: center;
            color:white;
            position:relative;
            bottom:13px;
            left:255px; */
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            text-align: center;
            line-height: 36px;
            -webkit-border-radius:50%;
            display:block;
        }


        .input-edit{
            width:60vw;
        }

        .input-edit > table {
            width:50vw;
            margin:20px;
            margin-left:100px;
        }

        .input-edit > table > tr > td {
            padding:30px;
        }
        .td-title{
            width:15vw;
            text-align: left;
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