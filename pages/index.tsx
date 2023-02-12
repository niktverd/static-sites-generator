import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Comments } from 'blocks/Comments';
import { Text, TextBlockDirections } from 'blocks/Text';
import { FormBase } from 'components/forms/FormBase';

const comments = [
    {
        name: '葉自飄飄',
        text: '老公變化很明顯，大、粗、硬，時間也很長，享受過高潮的我越來越離不開他了。',
        avatar: 'img/people/026.jpg',
        image: '',
    },
    {
        name: '鈊囚箛島',
        text: '52歲用兩個月，雞巴沒怎麽長長，隻比原來粗了，隻要有女人刺激，馬上就能硬起來，硬邦邦的，可以弄25分鍾以上，我這個年齡能搞成這樣我很滿意。',
        avatar: 'img/people/015.jpg',
        image: '',
    },
    {
        name: '楚天舒',
        text: '老用戶來報到，男人不行，女人肯定要出事兒，你再有錢、再有地位，在床上搞不定女人，說到底還是個失敗的男人，用了3個月，停了有3個月了，陰莖勃起17釐米，比原來增長了4釐米，做愛最少半小時，候體力好能做40-50分鍾左右，沒有複發反彈。',
        avatar: 'img/people/002.jpg',
        image: 'img/products/002.png',
    },
    {
        name: '老克勒',
        text: '我老公原來愛愛時間隻能做10分鍾不到，用了2個月不到，愛愛時間最少30分鍾，最主要他小弟弟比原來大了，硬了，熱熱的，能把我下面撐的滿滿的，并且頂到最裏面，再加上30分鍾的刺激，我真是愛死他了。',
        avatar: 'img/people/023.jpg',
        image: '',
    },
    {
        name: '閑雲野鶴',
        text: '已經訂購了，希望能盡快拿到產品，期待中。。。。',
        avatar: 'img/people/024.jpg',
        image: 'img/products/003.png',
    },
    {
        name: '阿伯',
        text: '已經訂購了，希望我也能輕鬆變猛男。',
        avatar: 'img/people/027.jpg',
        image: '',
    },
    {
        name: 'Sally',
        text: '各位姐妹要注意了，這個東西千萬不要給你的男人用了，除非你有好的體力天天把他榨幹，否則很有可能分分鍾給你來個彩色的帽子。',
        avatar: 'img/people/034.jpg',
        image: '',
    },
    {
        name: '小貓咪',
        text: '比起前男朋友，我老公床上能力真的很差，我想給他調理，麻煩PM一下謝謝！',
        avatar: 'img/people/031.jpg',
        image: '',
    },
    {
        name: '芊芊',
        text: '男朋友才用了沒多久，變的好色情，天天都隻想那個事，家裏客廳、卧室、廁所、廚房都留下我們戰鬥過的氣息。他性欲好強，幾乎天天都要跟我做，有時候我在炒菜或者洗衣服的時候他就不管不顧的直接把我拖到床上來一遍。不過因爲他那個東西夠大，時間夠長，我也挺開心的，雖然我們經濟條件不是很好，但是作爲女人，我還是挺幸福的。',
        avatar: 'img/people/019.jpg',
        image: 'img/products/001.jpg',
    },
    {
        name: '張俊楠',
        text: '我早洩問題十幾年了，去年在朋友介紹下，介紹了這個給我，用了2個月，現在基本每次都能做30分鍾以上，太感謝了。',
        avatar: 'img/people/016.jpg',
        image: '',
    },
    {
        name: '沉鎮傑',
        text: '是真的喔，比以前長了4公分！',
        avatar: 'img/people/003.jpg',
        image: '',
    },
    {
        name: '李雨航',
        text: '我的情況嚴重多了，年輕時愛打飛機，現在想硬都難。沒想到腎這麽重要...',
        avatar: 'img/people/004.jpg',
        image: '',
    },
    {
        name: '李晟睿',
        text: '調理将近兩個月了，補腎鎖陽丸對我來說很有用！我之前真的是秒男，進去就射的那種，現在也能做十幾分鍾了，但一定要堅持用才行~你們真的可以試一下。',
        avatar: 'img/people/008.jpg',
        image: '',
    },
    {
        name: '餘偉文',
        text: '我有用過，效果還蠻好的！現在和女朋友做愛能做30分鍾了！',
        avatar: 'img/people/014.jpg',
        image: 'img/products/004.jpg',
    },
    {
        name: '陳嘉倫',
        text: '已經訂購使用了一個療程了補腎鎖陽丸，女朋友很滿意，謝謝分享咯~',
        avatar: 'img/people/001.jpg',
        image: '',
    },
    {
        name: '柯成達',
        text: '聽說是純中藥秘製我就放心了，這產品挺好的，幾乎沒有副作用，可以試試！',
        avatar: 'img/people/005.jpg',
        image: '',
    },
    {
        name: 'Suzie',
        text: '我男朋友試了其他產品都沒用唉，這個產品真的能調理好嗎？',
        avatar: 'img/people/008.jpg',
        image: '',
    },
    // ================
    {
        name: '溫佑謙',
        text: '我有個朋友訂購了，效果很好，推薦我來購買。等貨到我再分享！',
        avatar: 'img/people/018.jpg',
        image: '',
    },
    {
        name: '李文昊',
        text: '相比其他壯陽產品，我還是相信純中藥秘製，不傷身體。',
        avatar: 'img/people/022.jpg',
        image: '',
    },
    {
        name: '修傑',
        text: '我早洩問題十幾年了，去年在朋友介紹下，介紹了這個給我，用了半年好了，現在基本每次都能做30分鍾以上，太感謝了。',
        avatar: 'img/people/023.jpg',
        image: '',
    },
];

const myText = {
    title: '我是如何讓我老公重新勃起成爲“真”男人？',
    subtitle: '發表於 2023.02.06 作者： 張藝闡',
    image: 'img/people/001.jpg',
    text: '大家好！ 我想大家還記得6個月前我曾經抱怨過我丈夫。 他在床上的表現真的太差了， 和他做愛我從來沒有覺得舒服過， 所以我真的很羞愧， 我竟然從來沒有體會過什麽是性高潮， 真羨慕其他的女人。 即使我在床上用盡了所有的辦法包括口交， 他的陰莖也從來沒有任何勃起的迹象， 而且即使偶爾勃起， 每次隻有1-3分鍾！',
};

const myText2 = {
    text: ` 而且更加刺激我的是當我看色情片時，我看到每個男人都有一個由長又大勃起陰莖。而在床上面對我老公時，我真的覺得很難受。

    爲了讓他重新成爲一個真正的男人，我聽了很多的建議也做了很多努力。而且爲了讓我做愛的時候能像其他女人一樣舒服或者達到高潮，我老公也嘗試了很多的方法，包括偉哥和其他勃起功能障礙產品。但一切都是徒勞，對他來說沒有任何作用，依舊無法勃起，依舊早洩！
    
    嘗試了這麽多的的方法後，我一度決定放棄，我甚至覺得這個應該是遺傳的問題。而且每次當我們讨論這個問題的時候，我丈夫也對自己失去了信心。後來慢慢的，我也沒有和他做愛的欲望。每次他都會讓我失望，每次我都無法滿足，掃性而歸。所以我老公也變的愈來愈不自信，也爲此經常責備自己，我看起來真的心疼。但是這都於事無補，我們之間的感情因爲他的性功能問題出現了裂痕。`,
};

const myText3 = {
    title: '後來，意想不到的事情發生了……',
    image: 'img/people/002.jpg',
    text: '6個月前的一天，我在一家知名雜志上，讀到了一個訪談節目《和你談談》對著名色情明星Elvis Tsui的采訪片段，也許你也知道這個節目。在采訪中，他講述了自己的經歷，并表示每個男人其實都可以随心所欲地做愛，他的陰莖将能夠達到理想的勃起并體驗高潮。天啊，我心裏想這正好就是我和我的丈夫一直想要的。 ',
    direction: TextBlockDirections.Reverse,
};

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />

                <title>增大你陰莖，延長性愛時間，徹底征服女人！</title>
                <link
                    rel="shortcut icon"
                    href="img/products/002.png"
                    type="image/x-icon"
                />
            </Head>

            <main className={styles.main}>
                {/* <Header1 />
                <Breadcrumbs1 /> */}
                <div style={{ width: '50%' }}>
                    <Text {...myText} />
                    <Text {...myText2} />
                    <Text {...myText3} />
                    <FormBase
                        nameLabel="名稱"
                        phoneLabel="電話號碼"
                        namePlaceholder="姓名"
                        phonePlaceholder="电话号码"
                        buttonCaption="訂購補腎鎖陽丸可享受 50% 的折扣！"
                    />
                    <Comments title="194 條評論" items={comments} />
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </>
    );
};

export default Home;
