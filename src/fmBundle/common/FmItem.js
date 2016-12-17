// @flow

import shortId from 'shortid'
import {source} from 'reactive-di/annotations'

@source({key: 'FmItem'})
export default class FmItem {
    id = shortId.generate()
    title = ''

    copy(rec: $Shape<this>): this {
        return Object.assign((Object.create(this.constructor.prototype): any), this, rec)
    }
}
