import React from 'react';

export const Breadcrumbs1 = () => {
    return (
        <div id="breadcrumbs">
            <span className="hide-offscreen">你在这里：</span>
            <div>
                <a>
                    <span itemProp="title">主页</span>
                </a>
                <span style={{ fontWeight: 'bold' }}> &gt; </span>
                <span style={{ fontWeight: 'bold' }}>博客</span>
                <div className="page-actions">
                    <div className="share-buttons">
                        <span>
                            <a
                                className="email_icon"
                                id="anch_19"
                                title="Email this page to a friend"
                            >
                                <img
                                    src="./img/i_share_email.png"
                                    alt="Email this page to a friend"
                                    className="share-icon b-lazy b-loaded"
                                />
                            </a>
                        </span>
                        <span>
                            <a
                                className="share-facebook"
                                id="anch_20"
                                title="Facebook"
                            >
                                <img
                                    src="./img/i_share_fb.png"
                                    alt="Facebook"
                                    className="share-icon b-lazy b-loaded"
                                />
                            </a>
                        </span>
                        <span>
                            <a
                                className="share-twitter"
                                id="anch_21"
                                title="Twitter"
                            >
                                <img
                                    src="./img/i_share_twitter.png"
                                    alt="Twitter"
                                    className="share-icon b-lazy b-loaded"
                                />
                            </a>
                        </span>
                        <span>
                            <a
                                className="share-googleplus"
                                id="anch_22"
                                title="Google+"
                            >
                                <img
                                    src="./img/i_share_googleplus.png"
                                    alt="Google+"
                                    className="share-icon b-lazy b-loaded"
                                />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
