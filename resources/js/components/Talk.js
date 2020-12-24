// import React from 'react';
// import ReactDOM from 'react-dom';
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Talk extends Component {
    render() {
        return (

            <div className="main-menu">
                <div className="folder-menu">
                    <div className="search-back"><input type="text" className="search-text" placeholder=" &#xf002; キーワードを入力"></input></div>
                    <ul className="folder-list">
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        <li>
                           <div className="user-icon"><i class="far fa-user"></i></div>
                           <div className="user-text">
                               <div className="text-list"><span className="person">開発部長</span><span className="date">昨日</span></div>
                               <div className="talk-list">
                                    <input type="text" value="おはよう御座います。こちらサンプルテキストです。"></input>
                                    <p className="circle">7</p>
                               </div>
                           </div>
                        </li>
                        
                    </ul>
                </div>
                <div className="main-contents">
                    <div className="main-header">
                        <div className="my-header">
                            <div className="my-header-title">
                                <p>トーク</p>
                                <p>グループ名</p>
                            </div>  
                            <div className="my-header-items">

                                <p>a</p>
                                <p>s</p>
                            </div>
                        </div>
                        <div className="account-settings"></div>
                    </div>
                    <div className="main-item">
                        {/* 会話部分 */}
                        <div class="opponent">
                            <div class="faceicon">
                                <img src="" width="50" height="50" class="rounded-circle align-middle img-responsive float-left"></img>
                                <p className="name font-weight-bold m-0">開発部長</p>
                                <div class="message_box m-2">
                                    <div class="message_content p-3">
                                    <div class="message_text">message</div>
                                    </div>
                                </div>
                                <p class="dateTime float-right">2019</p>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

if (document.getElementById('talk')) {
    ReactDOM.render(<Talk />, document.getElementById('talk'));
}
