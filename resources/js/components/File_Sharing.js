import React ,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class File_Sharing extends Component
{
    render()
    {

        return(
            <div className="main-menu">
                <div className="folder-menu">
                <input type="text" className="search-text" placeholder="&#xf002;キーワードを入力"></input>
                <ul className="folder-list">
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>                                
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                            <li><a href="" className="folder-a"><i class="far fa-folder folder-icon"></i>テストフォルダ</a><a href=""><i class="fas fa-ellipsis-h"></i></a></li>
                        </ul>
                </div>
                <div className="main-contents">
                    <div className="main-header">
                        <div className="my-header">
                            <h5>ファイル共有</h5>
                            <h6 className="folder-color">フォルダ名</h6>
                            <div className="icon">
                                <a href="" className="circle"><i class="fas fa-cloud-download-alt folder-color"></i></a>
                                <p className="folder-color header-font">ダウンロード</p>
                                <a href="" className="circle"><i class="fas fa-cloud-upload-alt folder-color"></i></a>
                                <p className="folder-color header-font">アップロード</p>
                                <a href="" className="circle"><i class="fas fa-user-plus folder-color"></i></a>
                                <p className="folder-color header-font">共有ユーザ追加</p>
                               
                            </div>
                            <div className="account-settings">
                                <a href="" className="circle"><i class="far fa-user folder-color"></i></a>
                                <p className="folder-color header-font">アカウント</p>
                                <a href="" className="circle"><i class="far fa-bell folder-color"></i></a>
                                <p className="folder-color header-font">通知</p>
                                <a href="" className="circle"><i class="fas fa-cog folder-color"></i></a>
                                <p className="folder-color header-font">設定</p>
                                <a href="" className="circle"><i class="far fa-question-circle folder-color"></i></a>
                                <p className="folder-color header-font">ヘルプ</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="main-item"></div>
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