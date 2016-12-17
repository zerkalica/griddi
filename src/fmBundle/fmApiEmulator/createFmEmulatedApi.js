// @flow

import shortId from 'shortid'

import {EmulatedApi} from 'rdi-api-emulator'
import {HttpError} from 'rdi-fetcher'
import type {FetchOptions} from 'rdi-fetcher'
import {AbstractStorage} from 'rdi-helpers'
import FmItem from 'griddi/fmBundle/common/FmItem'

const defaultFmItems: FmItem[] = [
    new FmItem({
        id: 't1',
        title: 'test fm #1'
    }),
    new FmItem({
        id: 't2',
        title: 'test fm #2'
    })
]

const defaultLogin = {
    isAuthorized: false
}

function findByKeys(data: {[id: string]: mixed}, criteria: {[id: string]: mixed}): boolean {
    const keys = Object.keys(criteria)
    return keys.filter(
        (prop: string) => data[prop] !== criteria[prop]
    ).length !== 0
}

function getBody(body?: ?(string | Object)): Object {
    return typeof body === 'string'
        ? JSON.parse(body)
        : ((body || {}): any)
}

function sortByDate(el1: FmItem, el2: FmItem): number {
    if (String(el1.created) > String(el2.created)) {
        return 1
    }
    if (String(el1.created) < String(el2.created)) {
        return -1
    }
    return 0
}

export default function createFmEmulatedApi(
    storage: AbstractStorage
) {
    function assertAuth() {
        const session = storage.get('session')
        if (session && !session.isAuthorized) {
            throw new HttpError(403, 'Not authorized')
        }
    }

    return new EmulatedApi([
        {
            method: 'GET',
            url: new RegExp('/session'),
            execute(params: FetchOptions, match: string[]): Promise<*> { // eslint-disable-line
                const data = storage.get('session')
                return Promise.resolve(data || defaultLogin)
            }
        }
    ])
}
