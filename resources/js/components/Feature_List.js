// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Feature_List extends Component {
    render() {

        const videocontext = {
            left: "2%",
            bottom: "100%"
        };

        const filecontext = {
            left: "18.5%",
            bottom: "100%"
        }

        const submitcontext = {
            left: "83.5%",
            bottom: "100%"
        }

        const familycontext = {
            left: "20px",
            top: "0px",
            color: "black"
        }

        const familysettingcontext = {
            left: "90%",
            top: "0px",
            color: "black"
        }
        return (

            <div className="main-menu">
                <div className="main-contents">
                    <div className="my-header">
                        <h2>機能管理</h2>
                    </div>
                    <div className="account-settings">
                        <section className="my-header-items-section">
                            <a href="" className="circle"><i class="fas fa-sign-out-alt"></i></a>
                            <p>ログアウト</p>
                        </section>
                        
                    </div>
                    <div className="main-item">
                        <div className="btn-dsn"><button type="submit" name="action">　<i class="far fa-edit"></i>編集　</button></div>
                        <div className="list">
                            <div className="input-list">
                                <label for="com-name" className="label">企業名</label>
                                <input type="text" id="com-name" className="input-des"></input>
                            </div>
                            <div className="input-list">
                                <label for="com-url" className="label">企業URL</label>
                                <input type="url" id="com-url" className="input-des"></input>
                            </div>
                            <div className="input-list">
                                <label for="mana-email" className="label">管理用メールアドレス</label>
                                <input type="email" id="mana-email" className="input-des"></input>
                            </div>
                            <div className="input-list">
                                <label for="mana-pass" className="label">管理パスワード</label>
                                <input type="password" id="mana-pass" className="input-des"></input>
                            </div>
                            <div className="input-list">
                                <label for="com_pass" className="label">企業パスワード</label>
                                <input type="password" id="com_pass" className="input-des"></input>
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        )
    }
}

if (document.getElementById('feature_list')) {
    ReactDOM.render(<Feature_List/>, document.getElementById('feature_list'));
}
