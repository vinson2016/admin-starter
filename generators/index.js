const path = require('path');

const LIST              = '列表页(包含: 表格+底部)';
const LIST_WITH_FILTER  = '列表页(包含: 查询+表格+底部)';

module.exports = function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: '请选择页面类型:',
                choices: () => [
                    LIST,
                    LIST_WITH_FILTER
                ]
            },
            {
                type: 'input',
                name: 'folder',
                message: '请输入路径(相对于/app/pages/):'
            },
            {
                type: 'input',
                name: 'className',
                message: '请输入 Class 名(大驼峰): ',
                default: 'List'
            }
        ],
        actions: data => {
            const getPath = (fileName) => {
                return path.join('../app/pages/', data.folder, `{{properCase className}}/${fileName}`);
            };

            let actions;
            if (data.type === LIST) {
                const listPath = getPath('index.js');
                const listTemplate = './templates/list/index.hbs';
                const scssPath = getPath('index.scss');
                const scssTemplate = './templates/list/scss.hbs';
                actions = [
                    {
                        type: 'add',
                        path: listPath,
                        templateFile: listTemplate,
                        abortOnFail: true
                    },
                    {
                        type: 'add',
                        path: scssPath,
                        templateFile: scssTemplate,
                        abortOnFail: true
                    }
                ];
            }
            if (data.type === LIST_WITH_FILTER) {
                const listPath = getPath('index.js');
                const listTemplate = './templates/list-with-filter/index.hbs';
                const filterPath = getPath('Filter.js');
                const filterTemplate = './templates/list-with-filter/filter.hbs';
                const scssPath = getPath('index.scss');
                const scssTemplate = './templates/list-with-filter/scss.hbs';
                actions = [
                    {
                        type: 'add',
                        path: listPath,
                        templateFile: listTemplate,
                        abortOnFail: true
                    },
                    {
                        type: 'add',
                        path: filterPath,
                        templateFile: filterTemplate,
                        abortOnFail: true
                    },
                    {
                        type: 'add',
                        path: scssPath,
                        templateFile: scssTemplate,
                        abortOnFail: true
                    }
                ];
            }
            return actions;
        }
    });
};
