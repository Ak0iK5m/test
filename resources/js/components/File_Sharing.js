import React ,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class File_Sharing extends Component
{
    render()
    {

        return(
            <div>
                <div className="side">
                    {/*ドロワーメニュー*/}
                    <div className="drawer-menu">
                        <ul className="drawer-menu-inner">
                            <li><a href="" className="drawer-menu-a"><i class="fas fa-home"></i>ホーム</a></li>
                            <li><a href="" className="drawer-menu-a"><i class="fas fa-tasks"></i>タスク</a></li>
                            <li><a href="" className="drawer-menu-a"><i class="far fa-comment-alt"></i>トーク</a></li>
                            <li><a href="" className="drawer-menu-a"><i class="fas fa-book-open"></i>ノート</a></li>
                            <li><a href="" className="drawer-menu-a"><i class="far fa-folder"></i>ファイル共有</a></li>
                            <li><a href="" className="drawer-menu-a"><i class="far fa-file-alt"></i>レポート</a></li>
                        </ul>                
                    </div>
                </div>
                <div className="side">
                    {/*検索*/}
                    <div className="search-box">
                        <input type="text" className="search-text" placeholder="&#xf002;キーワードを入力"></input>
                    </div>
                    
                    <div className="folder">
                        {/* フォルダ追加
                        <div className="folder-add"><i class="fas fa-folder-plus"></i>追加</div> */}
                        {/*フォルダ一覧*/}
                        <ul className="folder-list">
                            <li><a href="" className="folder-a"><i class="far fa-folder"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                        </ul>
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