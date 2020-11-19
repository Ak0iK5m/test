<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            *{
                margin: 0px;
                padding: 0px;
            }
            body{
                color: #62ABB6;
                font-size: 23px;
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
                top: 0px; 
                left: 0px;
                width: 250px;
                height:1080px;
                background: #62ABB6 0% 0% no-repeat padding-box;
            }

            .drawer_menu li{
                list-style: none;
                margin-bottom: 30px;
                padding-left: 10px;
            }

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
                display: inline-block;
                font-family: FontAwesome;
            }
        </style>
    </head>

    <body>
        <div id="file_sharing"></div>
        <script src="{{asset('/js/app.js')}}">
        </script>
    </body>
</html>