import { toUpper } from './util'
import { toLower } from 'lodash'
import React, { FC } from 'react'

export const Hello: FC = () => {
    return <div>{toUpper(toLower('Hello'))}</div>
}
