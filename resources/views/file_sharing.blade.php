<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>

        <!-- Styles -->
        <style>
            *{
                margin: 0px;
                padding: 0px;
            }
            body{
                color: #62ABB6;
                font-size: 21px;
                letter-spacing: 0.05em;
                margin-left: auto;
                margin-right: auto;
                font-family: 'Noto Sans JP', 'sans-serif';
            }

            html{
                
            }

            .side{
                display: inline-block;
            }
            /*ドロワーメニュー*/
            a{
                text-decoration: none;
                color:#ffffff;
            }

            .drawer-menu{
                width: 18vw;
                height:1080px;
                background: #62ABB6;
                list-style: none;
                
            }

            ul.drawer-menu-inner li{
                margin-bottom: 30px;
                padding-left: 25px;
            }

            

            /*検索*/
            .search-box{
                background: #CCE3E3;
                position: fixed;
                top: 0px;
                
            }

            .search-text{
                margin: 30px 70px;
                width: 24vw;
                height: 40px;
                border: none;
                border-radius:4px;
                color: #00697A;
                font-family: 'FontAwesome';
            }

            /*フォルダー追加*/
            .folder-add{
                height: 50px;
                
                background: #FFFFFF;
                color: #00697A;
                position: fixed;
                top: 100px;
                line-height: 50px;
                text-align: center;
                letter-spacing: 10px;
                margin: 0 auto;
            }

            /*フォルダ一覧*/
            .folder{
                width: 24vw;
            }
            .folder-list{
                list-style: none;
            }

        </style>
    </head>

    <body>
        <div id="file_sharing"></div>
        <script src="{{asset('/js/app.js')}}">
        </script>
    </body>
</html>