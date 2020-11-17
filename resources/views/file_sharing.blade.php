<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            body{
                font-family: 'Noto Sans JP', 'sans-serif';
            }

            html{
            }

            /*ドロワーメニュー*/
            a{
                text-decoration: none;
                color:#ffffff;
            }
            .drawer_menu{
                top: 0px; 
                left: 0px;
                width: 353px;
                height:1080px;
                background: #62ABB6 0% 0% no-repeat padding-box;
                position: sticky;
                font: 'Noto Sans JP', Regular, 24px, #ffffff;
                
            }

            .drawer_menu li{
                list-style: none;
            }

            .drawer_menu ul li:nth-child(1){
                /*ホームアイコン*/
                list-style-image: url("../images/home.png")
            }

            .drawer_menu ul li:nth-child(2){
                /*タスク*/
                list-style-image: url("../images/task.png")
            }

            .drawer_menu ul li:nth-child(3){
                /*トーク*/
                list-style-image: url("../images/message-square.png")
            }

            .drawer_menu ul li:nth-child(4){
                /*ノート*/
                list-style-image: url("../images/book-open.png")
            }

            .drawer_menu ul li:nth-child(5){
                /*ファイル共有*/
                list-style-image: url("../images/folder.png")
            }

            .drawer_menu ul li:nth-child(6){
                /*レポート*/
                list-style-image: url("images/report.png")
                
            }



        </style>
    </head>

    <body>
        <div id="file_sharing"></div>
        <script src="{{asset('/js/app.js')}}">
        </script>
    </body>
</html>