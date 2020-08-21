import React from 'react'
require('../icons/lock.svg')
require('../icons/view-off.svg')
require('../icons/add.svg')
require('../icons/down.svg')
require('../icons/up.svg')

const Icon = (props) => {
    return (
        <svg fill={props.fill} className={props.className}>
            <use xlinkHref={'#'+props.name} />
        </svg>
    )
}

export default Icon