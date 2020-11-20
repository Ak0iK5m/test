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

            .drawer_menu{
                width: 18vw;
                height:1080px;
                background: #62ABB6;
                list-style: none;
            }

            ul.drawer_menu_inner li{
                margin-bottom: 30px;
                padding-left: 25px;
            }

            

            /*検索*/
            .search_box{
                background: #CCE3E3;
                position: fixed;
                top: 0px;
                
            }

            .search{
                margin: 30px 70px;
                height: 40px;
                border: none;
                border-radius:4px;
                color: #00697A;
                font-family: 'Noto Sans JP', 'sans-serif';
            }

            /*フォルダー追加*/
            .folder_add{
                height: 50px;
                width: 345px;
                background: #FFFFFF;
                color: #00697A;
                position: fixed;
                top: 100px;
                line-height: 50px;
                text-align: center;
                letter-spacing: 10px;
            }

            .folder{
                list-style: none;
                border: dashed red;
            }
        </style>
    </head>

    <body>
        <div id="file_sharing"></div>
        <script src="{{asset('/js/app.js')}}">
        </script>
    </body>
</html>