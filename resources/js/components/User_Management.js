// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class User_Management extends Component {
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
                        <div className="search">
                            <form id="sear_form" action="" method="get">
                                <input type="text" id="sear_box" placeholder="ユーザ検索"></input>
                                <button type="submit" name="action">　<i class="fas fa-search"></i>検索　</button>
                            </form>
                            
                        </div>
                        <div className="management">
                            <table border="1" bordercolor="#E0E0E0"cellspacing="0" cellpadding="5"align="center">
                                <tr>
                                    <th>ユーザID</th>
                                    <th>ユーザ名</th>
                                    <th>ユーザメールアドレス</th>
                                    <th>パスワードリセット</th>
                                    <th>ユーザロック</th>
                                </tr>
                                <tr>
                                    <td>U000000</td>
                                    <td>竹村佳希</td>
                                    <td>test1@arael.com</td>
                                    <td className="pass-re"><a href=""><i className="far fa-trash-alt">パスワードをリセットする</i></a></td>
                                    <td className="lock"><a href=""><i className="fas fa-lock"></i>ロック</a></td>
                                </tr>
                                <tr>
                                    <td>U000000</td>
                                    <td>竹村佳希</td>
                                    <td>test1@arael.com</td>
                                    <td className="pass-re"><a href=""><i className="far fa-trash-alt">パスワードをリセットする</i></a></td>
                                    <td className="lock"><a href=""><i className="fas fa-lock"></i>ロック</a></td>
                                </tr>
                                <tr>
                                    <td>U000000</td>
                                    <td>竹村佳希</td>
                                    <td>test1@arael.com</td>
                                    <td className="pass-re"><a href=""><i className="far fa-trash-alt">パスワードをリセットする</i></a></td>
                                    <td className="lock"><a href=""><i className="fas fa-lock"></i>ロック</a></td>
                                </tr>
                                <tr>
                                    <td>U000000</td>
                                    <td>竹村佳希</td>
                                    <td>test1@arael.com</td>
                                    <td className="pass-re"><a href=""><i className="far fa-trash-alt">パスワードをリセットする</i></a></td>
                                    <td className="lock"><a href=""><i className="fas fa-lock"></i>ロック</a></td>
                                </tr>
                                <tr>
                                    <td>U000000</td>
                                    <td>竹村佳希</td>
                                    <td>test1@arael.com</td>
                                    <td className="pass-re"><a href=""><i className="far fa-trash-alt">パスワードをリセットする</i></a></td>
                                    <td className="lock"><a href=""><i className="fas fa-lock"></i>ロック</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>                        
                </div>
            </div>
        )
    }
}

if (document.getElementById('user_management')) {
    ReactDOM.render(<User_Management/>, document.getElementById('user_management'));
}
