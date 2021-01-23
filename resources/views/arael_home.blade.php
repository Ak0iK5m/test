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
            width: calc(100vw - 18vw);
            background-color: gray;
        }
        .my-header {
            width: 64vw;
            height: 80px;
            background-color: #E9F2F3;
            color: #8aa0a0;
            display: flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            margin-left: 0;
        }

        .my-header > h2 {
            color:#62ABB6;
            font-weight: 500;
            position:relative;
            top:20px;
            left:15px;
        }

        .account-settings {
            width: 20vw;
            height: 80px;
            right: 0px;
            border-left: solid #CCE3E3;
            background: #E9F2F3;
            display: flex;
            flex-flow: row;
            justify-content: center;
            top: 0px;
            position: fixed;
            /* width:30%;
            background-color:blue; */
        }
        .account-settings>.my-header-items-section>a {
            color: #8AA0A0;
        }
        .account-settings>.my-header-items-section>p {
            color: #8AA0A0;
            font-size: 12px;
        }
        .my-header-title {
            width: 40%;
            background-color: #e9f2f3;
            margin-top: 20px;
            margin-left: 10px;
            /* width:40%;
            background-color:#e9f2f3; */
        }
        h5{
             color:#62ABB6;
        }
        h6{
            margin-top:10px;
            color:#8AA0A0;
        }
        .my-header-items {
            display:flex;
            display:-webkit-box;
  	        display:-ms-flexbox;
            flex-flow:row;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-flow: row;
            width:60%;
            /* width:60%;
            background-color:#40px; */
        }
        .my-header-items-section {
            display: flex;
            /* display:-webkit-box;
  	        display:-ms-flexbox; */
            flex-flow: column wrap;
            margin-right:10px;
            align-items: center;
            margin-top: 10px;
        }
        .my-header-items >.my-header-items-section > .circle {
            background-color: #00B7B7;
            color: #fff;
        }
        .my-header-items > .my-header-items-section > p {
            font-size: 12px;
        }
        /*main-item*/
        .main-item {
            background-color: #FFFFFF;
            height:100vh;
            width: 82vw;
            top: 80px;
            position: absolute;
            overflow-y: scroll;
            overflow-x: hidden;
        }

        .main-item > h2 {
            color:#8AA0A0;
            font-weight: 400;
            text-align: center;
            position: relative;
            top:30px;
            margin-bottom:50px;
        }
        
        
        .circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            text-align: center;
            line-height: 36px;
            -webkit-border-radius:50%;
            display:block;
        }

        .day{
            margin-top:30px;
            border:2.3px solid #8AA0A0;
            border-radius: 5px;
            width: 64vw;
            position: relative;
            left:10vw;
        }
        .updated-report{
            /* border:2.3px solid #8AA0A0;
            border-radius: 5px; */
            /* border-bottom: none; */
            /* width: 64vw; */
            position: relative;
            /* left:10vw; */
            display:flex;
            flex-flow:column;
            color:#8AA0A0;
        }

        .updated-detail > .edited-ago {
            width: 10vw;
            text-align: right;
        }

        .date{
            color:#8AA0A0;
            position: relative;
            top:5px;
            left: 10px;
            font-size:14px;
            width: calc( 64vw - 20px );
            height:25px;
            border-bottom: 1px solid #8AA0A0;
        }

        
        .updated-detail{
            position: relative;
            margin-top:15px;
            display: flex;
            flex-flow: row;
            /* width: 12vw; */
        }

        .updated-detail > img {
            margin:10px 15px;

        }

        .updated-content {
            width: 47vw;
            display: flex;
            flex-direction: column;
            /* border-bottom: 1px solid #8AA0A0; */
        }

        .updated-chara{
            margin:5px;
        }

        .updated-feature{
            margin:5px;
            display:flex;
            flex-direction: row;
        }

        .note-name {
            position:relative;
            width:20vw;
        }

        .note{
            display: flex;
            flex-direction: column;
            
        }

        button{
            background-color: #4B8999;
            border-style:none;
            color:#FFFFFF;
            font-size:14px;
            margin:1px;
            border-radius: 3px;
        }

        .btn-dsn{
            width: 40vw;
            text-align: right;
        }
        .more-read{
            /* background-color: #00000029; */
            background-color:#E9F2F3;
            /* color:#62ABB6; */
            color:#4B8999;
            position:relative;
            /* left: 38vw; */
        
            width: 115px;
            height:30px;
            padding:3px;
            margin:10px;
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
    <div id="arael_home"></div>
    <script src="{{asset('/js/app.js')}}"></script>
   
</body>

</html>