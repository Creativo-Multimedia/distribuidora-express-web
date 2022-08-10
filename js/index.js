import { currentYear } from "./currentYear.js"
import { hideLoader } from "./hideLoader.js"
import {scrollToTop} from './scrollToTop.js'

const d = document

d.addEventListener('DOMContentLoaded', e => {
    currentYear()
    hideLoader()
    scrollToTop('.scroll-top-btn', '.scroll-top-btn i')
})
