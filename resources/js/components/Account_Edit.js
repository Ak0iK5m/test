// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Account_Edit extends Component {
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
                        <h2>ホーム</h2>
                    </div>
                    <div className="main-item">
                        <h2>アカウント情報の編集</h2>
                        <div className="account-edit">
                            <div className="input-edit">
                                <table border="1" >
                                    <tr>
                                        <td className="td-title"><i className="far fa-envelope"></i>　メールアドレス</td>
                                        <td><input type="email" placeholder="exampla@example.com"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="td-title"><i className="far fa-user"></i>　あなたの名前</td>
                                        <td><input type="text"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="td-title"><i className="fas fa-key"></i>　パスワード</td>
                                        <td><input type="password" minLength="8" placeholder="８文字以上で入力してください"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="td-title"><i className="fas fa-redo-alt"></i>　パスワードの再入力</td>
                                        <td><input type="password" minLength="8" placeholder="８文字以上で入力してください"></input></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

if (document.getElementById('account_edit')) {
    ReactDOM.render(<Account_Edit />, document.getElementById('account_edit'));
}
