/* @flow */
/* eslint-env browser */
import 'griddi/wpFixes'

import {merge} from 'node-config-loader/common'
import browserInit from 'rdi-bootstrap/browser'

import {ErrorPage, FallbackPage} from 'rdi-ui-common'
// import staticConfig from 'rdi-config/.configloaderrc'
import {rdi, pages, routes} from './modules'

const pn = document.location.pathname
const values = merge([
    {
        RouterConfig: {
            isFull: false,
            prefix: pn.substring(0, pn.length - 1),
            routes
        }
    },
    // staticConfig,
    window['griddi'] || {}
])

browserInit({
    window,
    ErrorPage,
    FallbackPage,
    elementId: 'app',
    values,
    rdi,
    pages
})()
