import React ,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class File_Sharing extends Component
{
    render()
    {

        return(
            <div>
            
                {/*ドロワーメニュー*/}
                <div className="drawer_menu">
                    <ul className="drawer_menu_inner">
                        <li><a href="">ホーム</a></li>
                        <li><a href="">タスク</a></li>
                        <li><a href="">トーク</a></li>
                        <li><a href="">ノート</a></li>
                        <li><a href="">ファイル共有</a></li>
                        <li><a href="">レポート</a></li>
                    </ul>                
                </div>

                {/*フォルダ*/}
                <div className="folder">
                    <header>
                        <input type="text" className="search" placeholder="キーワードを入力"></input>
                    </header>
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