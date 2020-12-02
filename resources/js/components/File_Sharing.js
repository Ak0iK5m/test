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
                            <div className="my-header-title">
                                <h5>ファイル共有</h5>
                                <h6 className="my-header-font-color">フォルダ名</h6>
                            </div>
                            <div className="my-header-items">
                                <section className="my-header-items-section">
                                    <a href="" className="circle"><i class="fas fa-cloud-download-alt my-header-font-color"></i></a>
                                    <p className="my-header-font-color header-font">ダウンロード</p>
                                </section>
                                <section className="my-header-items-section">
                                    <a href="" className="circle"><i class="fas fa-cloud-upload-alt my-header-font-color"></i></a>
                                    <p className="my-header-font-color header-font">アップロード</p>
                                </section>
                                <section className="my-header-items-section">
                                    <a href="" className="circle"><i class="fas fa-user-plus my-header-font-color"></i></a>
                                    <p className="my-header-font-color header-font">共有ユーザ追加</p>
                                </section>
                               
                            </div>
                        </div>
                        <div className="account-settings">
                            <section className="my-header-items-section">
                                <a href="" className="circle"><i class="far fa-user my-header-font-color"></i></a>
                                <p className="my-header-font-color header-font">アカウント</p>
                            </section>
                            <section className="my-header-items-section">
                                <a href="" className="circle"><i class="far fa-bell my-header-font-color"></i></a>
                                <p className="my-header-font-color header-font">通知</p>
                            </section>
                            <section className="my-header-items-section">
                                <a href="" className="circle"><i class="fas fa-cog my-header-font-color"></i></a>
                                <p className="my-header-font-color header-font">設定</p>
                            </section>
                            <section className="my-header-items-section">
                                <a href="" className="circle"><i class="far fa-question-circle my-header-font-color"></i></a>
                                <p className="my-header-font-color header-font">ヘルプ</p>                                </section>
                        </div>
                        {/* </div> */}
                        
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