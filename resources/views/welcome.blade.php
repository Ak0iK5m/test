<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            body {

                /*font-family: 'Nunito';*/
                color: #141414;
                font-size: 18px;
                letter-spacing: 0.05em;
                margin-left: auto;
                margin-right: auto;
                font-family: 'Roboto', sans-serif, 'Noto Sans JP', sans-serif;

            }

            html{

                color: #000;
                background: #fff;

            }

            li{

                /*listの先頭の記号を無効にする */
                list-style: none;
            }

            a{

                text-decoration: none;
                color: #fff;

            }

            /*header*/
            .header{

                background-color: #1b1310;
                color: #fff;
                height: 74px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                /*上下：０｜左右：120pxの余白 */
                padding: 0 120px;
                /*下線 */
                border-bottom: 1px solid #fff;

            }

            .nav-list{

                /*navの横並び */
                display: flex;

            }

            .nav-item{

                /*メニューの右側に余白 */
                margin-right: 55px;

            }

            /*fv(ファーストビュー)*/
            .fv{

                height: 90vh;
                background-color: #141414;
                /*メインコピーの上下左右中央寄せ*/
                display: flex;
                /*アイテムを中央に寄せる*/
                justify-content: center;
                /*コンテナ内のアイテムを中央に寄せる*/
                align-items: center;
                /*積み重なるように配置*/
                flex-direction: column;

            }

            .main-copy{

                font-size: 5rem;
                color: #fff;
                font-weight: bold;
                border: 2px solid #fff;
                padding: 34px 42px
            }
        </style>
    </head>

    <body>
        <div id="example"></div>
        <script src="{{asset('/js/app.js')}}">
        
        </script>
    </body>
</html>
