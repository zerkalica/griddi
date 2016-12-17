// @flow

import type {RegisterDepItem} from 'reactive-di'

import type {RouteConfig} from 'modern-router'
import {createFetch} from 'rdi-fetcher'
import {EmulatedApi, createEmulatedFetch} from 'rdi-api-emulator'

import createFmEmulatedApi from './fmApiEmulator/createFmEmulatedApi'
import FmPage from './FmPage'

const rdi: RegisterDepItem[] = [
    [createFetch, createEmulatedFetch],
    [EmulatedApi, createFmEmulatedApi]
]

const pages: {[id: string]: mixed} = {
    FmPage
}

const routes: {[id: string]: RouteConfig} = {
    index: {
        page: 'FmPage',
        pattern: '/',
        defaults: {
            group: 'all'
        }
    }
}

export {
    rdi,
    pages,
    routes
}
