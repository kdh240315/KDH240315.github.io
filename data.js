// 个人画作展示网站 - 画作数据

const artworks = [
    {
        id: 1,
        title: '赤焰',
        category: '人物画',
        year: '2024',
        medium: '数位绘画',
        size: '1920×1080',
        description: '以中国传统神话人物为灵感，结合现代插画风格创作。画面中人物眼神坚定，红色飘带与背景交相辉映，营造出热烈而神秘的氛围。',
        image: 'be37f1dd9f4533976fc1c494a780089a.jpg'
    },
    {
        id: 2,
        title: '蓝玫瑰',
        category: '人物画',
        year: '2024',
        medium: '数位绘画',
        size: '1920×1080',
        description: '银发少年与蓝玫瑰的组合，象征着神秘与忧郁。雨夜背景增添了画面的氛围感，花朵的蓝色与人物的银发形成鲜明对比。',
        image: 'eb16563db6e3f369c628eb3d0a76bdb5.jpg'
    },
    {
        id: 3,
        title: '深渊',
        category: '抽象画',
        year: '2025',
        medium: '数位绘画',
        size: '1080×1920',
        description: '黑白灰构成的抽象作品，线条交织形成神秘的漩涡。画面充满动感与张力，仿佛置身于无尽的深渊之中。',
        image: '6fdae2ca2f328cd559256133617929c0.jpg'
    },
    {
        id: 4,
        title: '雨夜',
        category: '人物画',
        year: '2026',
        medium: '数位绘画',
        size: '1920×1080',
        description: '蓝色雨夜中的少年，光影交错间展现出独特的气质。水珠与光影的处理赋予画面层次感与真实感。',
        image: 'b764ce71156e7270fc2c7f7a29cd9815.jpg'
    },
    {
        id: 5,
        title: '墨影',
        category: '人物画',
        year: '2025',
        medium: '数位绘画',
        size: '1920×1080',
        description: '暗黑风格的人物肖像，半遮面的设计增添神秘感。画面右侧的书法文字为作品增添了东方韵味。',
        image: 'c1ddba928a684425e9270cc00f8e9c2d.jpg'
    }
];

const categories = ['全部', '人物画', '抽象画'];

window.artData = {
    artworks: artworks,
    categories: categories
};
