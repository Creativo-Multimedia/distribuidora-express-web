import { currentYear } from "./currentYear.js"
import { hideLoader } from "./hideLoader.js"
import {scrollToTop} from './scrollToTop.js'
import contactFormValidations from "./contactFormValidations.js"

const d = document

d.addEventListener('DOMContentLoaded', e => {
    contactFormValidations()
    currentYear()
    hideLoader()
    scrollToTop('.scroll-top-btn', '.scroll-top-btn i')
})
