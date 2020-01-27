import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAlignJustify, 
    faCloudShowersHeavy,
    faSun,
    faCloudSun,
    faPooStorm,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Menu =  <FontAwesomeIcon icon={faAlignJustify} size="2x" color="gray"/>
export const Twitter = <FontAwesomeIcon icon={faTwitter} size="2x" color="#2985EB"/> 
export const Rain = <FontAwesomeIcon icon={faCloudShowersHeavy} size="4x" color="#2985EB"/>
export const Sun = <FontAwesomeIcon icon={faSun} size="4x" color="#2985EB"/>
export const Cloud = <FontAwesomeIcon icon={faCloudSun} size="4x" color="#2985EB"/>
export const Storm = <FontAwesomeIcon icon={faPooStorm} size="4x" color="#2985EB"/>
