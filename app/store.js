import { init } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createHistory from 'history/createHashHistory';

const options = {};
const loading = createLoadingPlugin(options);
const persistPlugin = createRematchPersist({
    whitelist: ['modelName1'],
    throttle: 5000,
    version: 1
});

export const history = createHistory();

const reducers = { router: connectRouter(history) };

/**
 * 基于 Rematch 实现的 Redux 最佳实践
 *
 * More: https://rematch.gitbook.io/handbook/
 */
export default (models) => init({
    redux: {
        reducers,
        middlewares: [
            routerMiddleware(history)
        ],
        devtoolOptions: {}
    },
    models,
    plugins: [
        loading,
        persistPlugin
    ]
});
