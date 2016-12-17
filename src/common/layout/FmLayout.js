// @flow

import {RdiLayoutView} from 'rdi-ui-common'
import FmLayoutTheme from './FmLayoutTheme'

interface FmLayoutProps {
    children?: mixed;
}

interface FmLayoutState {
    theme: FmLayoutTheme;
}

export default function FmLayout(
    {
        children
    }: FmLayoutProps,
    {
        theme
    }: FmLayoutState
) {
    return <RdiLayoutView>
        <div className={theme.content}>
            {children}
        </div>
    </RdiLayoutView>
}
