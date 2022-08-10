import { currentYear } from "./currentYear.js"
import { hideLoader } from "./hideLoader.js"

const d = document

d.addEventListener('DOMContentLoaded', e => {
    currentYear()
    hideLoader()
})
