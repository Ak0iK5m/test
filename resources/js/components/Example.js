import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component
{
    render()
    {

        return(
            <div>

                {/*header*/}
                <div>

                    <header className="header">

                        <div>
                            
                            <h1 className="site-title">

                                < a href="./">クリ★スタ</a>

                            </h1>

                        </div>

                        {/*ナビゲーションバー*/}
                        <div className="nav-wrapper">

                            <nav className="header-nav">

                                <div>

                                    <ul className="nav-list">

                                        <div>

                                            <li className="nav-item">

                                                <a href="#about">

                                                    About

                                                </a>

                                            </li>

                                        </div>

                                        <div>

                                            <li className="nav-item">

                                                <a href="#blog">

                                                    News

                                                </a>

                                            </li>

                                        </div>

                                        <div>

                                            <li className="nav-item">

                                                <a href="#blog">

                                                    Access

                                                </a>

                                            </li>

                                        </div>

                                    </ul>

                                </div>

                            </nav>

                        </div>

                    </header>
                
                </div>

                {/*fv(ファーストビュー)*/}
                <div className="fv">

                    <p className="main-copy">Create.Design</p>

                </div>

                {/*About*/}
                <div>

                    <section className="section-wrapper" id="about">

                        <div>

                            <h2 className="section-title">About</h2>

                            <h3 className="about-title">

                                ミニマルで<br></br>洗練されたデザインを。
                            </h3>
                            
                        </div>

                        <div>

                            <p className="text-about">

                                近年、ミニマルなデザインが流行しています。そこで弊社では、クライアント企業様新規サービスなどの課題に対してミニマルで洗練されたデザインを実現させることで解決のサポートをいたします。
                                もちろんすべてのサービスにおいてミニマルなデザインが課題解決になるわけではないので、課題や今後のサービスの展開等しっかりとヒアリングを行なった上でご提案させて頂きます。
                            
                            </p>

                        </div>

                    </section>

                </div>

                
            </div>

        );
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
