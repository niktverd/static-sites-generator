import React from 'react';

export const Header1 = () => {
    return (
        <header>
            <div id="mplus-header">
                <a id="top"></a>
                <a className="hide-offscreen" id="anch_1">
                    跳过导航
                </a>
                <div id="mplus-logo">
                    <a id="anch_4">
                        <img
                            src="./img/logo.png"
                            alt="MedlinePlus Trusted Health Information for You"
                            title="MedlinePlus Trusted Health Information for You"
                            className="b-lazy b-loaded"
                        />
                    </a>
                </div>
                <div id="mplus-nav">
                    <div
                        aria-live="polite"
                        className="sm-live-area hide-offscreen"
                    ></div>
                    <button
                        aria-controls="mplus-menu-list"
                        aria-pressed="false"
                        className="navmenu-btn"
                        id="sm-menu-btn"
                        role="button"
                        tabIndex={0}
                        title="Menu"
                        type="submit"
                    >
                        {' '}
                        菜单 <span className="icon icon-nav-menu"></span>
                    </button>
                    <ul className="nav-list" id="mplus-menu-list">
                        <li>
                            <a id="anch_5">主页</a>
                        </li>
                        <li>
                            <a id="anch_6">药物</a>
                        </li>
                        <li>
                            <a className="active" id="anch_7">
                                博客
                            </a>
                        </li>
                        <li>
                            <a id="anch_8">关于</a>
                        </li>
                    </ul>
                    <button
                        aria-controls="mplus-search"
                        aria-pressed="false"
                        className="navmenu-btn"
                        id="sm-search-btn"
                        role="button"
                        tabIndex={0}
                        title="Search"
                        type="submit"
                    >
                        <span className="hide-offscreen"> 演出 </span>搜索
                        <span className="icon icon-nav-search"></span>
                    </button>
                    Secondary Nav
                    <div className="secondarynav">
                        <ul className="nav-list">
                            <li>
                                <a className="tz_from" id="anch_9">
                                    <span>关于</span>
                                </a>
                            </li>
                            <li>
                                <a className="tz_from" id="anch_10">
                                    <span>网站地图</span>
                                </a>
                            </li>
                            <li>
                                <a className="tz_from" id="anch_11">
                                    <span>经常问的问题</span>
                                </a>
                            </li>
                            <li>
                                <a className="tz_from" id="anch_12">
                                    <span>联系我们</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="mplus-nav-bar">
                        <ul className="nav-list">
                            <li>
                                <a className="tz_from" id="anch_13">
                                    主页
                                </a>
                            </li>
                            <li>
                                <a className="" id="anch_14">
                                    药物
                                </a>
                            </li>
                            <li>
                                <a className="active tz_from" id="anch_15">
                                    博客
                                </a>
                            </li>
                            <li>
                                <a className="tz_from" id="anch_16">
                                    我们推荐
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
