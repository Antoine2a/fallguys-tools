// const React = require('react');

// function getNumBool(val) {
//     return Boolean(val) ? '1' : '0';
// }

// function BilibiliEmbed() {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { cid, aid, page, asWide, highQuality, danmaku } = this.props;
//         const src = `https://player.bilibili.com/player.html?cid=${cid}&aid=${aid}&page=${page}&as_wide=${getNumBool(asWide)}&high_quality=${getNumBool(highQuality)}&danmaku=${getNumBool(danmaku)}`;
//         return /*#__PURE__*/ React.createElement(
//             'div',
//             {
//                 style: {
//                     position: 'relative',
//                     padding: '30% 45%',
//                 },
//             },
//             /*#__PURE__*/ React.createElement('iframe', {
//                 style: {
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                     left: 0,
//                     top: 0,
//                 },
//                 src: src,
//                 frameborder: 'no',
//                 scrolling: 'no',
//             })
//         );
//     }
// }

// module.exports = {
//     BilibiliVideo,
// };
