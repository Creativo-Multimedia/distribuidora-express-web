export const currentYear = () => {
    let $year = document.getElementById('current-year')
    let currentYear = new Date().getFullYear()
    $year.innerText = currentYear
}