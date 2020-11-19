import React ,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class File_Sharing extends Component
{
    render()
    {

        return(
            <div>
                <head>
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
                </head>

                <div className="side">
                    {/*ドロワーメニュー*/}
                    <div className="drawer_menu">
                        <ul className="drawer_menu_inner">
                            <li><a href=""><i class="fas fa-home"></i>ホーム</a></li>
                            <li><a href=""><i class="fas fa-tasks"></i>タスク</a></li>
                            <li><a href=""><i class="far fa-comment-alt"></i>トーク</a></li>
                            <li><a href=""><i class="fas fa-book-open"></i>ノート</a></li>
                            <li><a href=""><i class="far fa-folder"></i>ファイル共有</a></li>
                            <li><a href=""><i class="far fa-file-alt"></i>レポート</a></li>
                        </ul>                
                    </div>
                </div>
                <div className="side">
                    {/*フォルダ*/}
                    <div className="folder">
                        <div className="search_box">
                            <input type="text" className="search" placeholder="&#xf002; キーワードを入力"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// file_sharing.blade.php内にfile_sharingというタグがある場合、 //
if (document.getElementById('file_sharing')) {
    // File_Sharingクラスを実行する //
    ReactDOM.render(<File_Sharing />, document.getElementById('file_sharing'));

}