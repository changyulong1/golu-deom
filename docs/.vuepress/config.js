module.exports = {
    base:'/goLongUi/',
    title: ' goLong Ui',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: 'github', link: 'https://github.com/changyulong1/golu-deom'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/Collapse',
                ]
            }
        ]
    }
}
