//定義所有節點
const form = document.querySelector("form")
const formName = document.querySelector('#formName')
const photo = document.querySelector('#photo')
const intro = document.querySelector('#intro')
const theme = document.querySelector('#inlineRadio1')
const nameCard = document.querySelector('#nameCard')
const cardImg = document.querySelector('#cardImg')
const cardName = document.querySelector('#cardName')
const cardText = document.querySelector('#cardText')

// 輸出到名片
form.addEventListener('submit', function () {
    event.preventDefault()
    //輸入正確對將資料放到Namecard裡
    if (formName.value.length > 0 && intro.value.length > 0) {
        cardName.innerHTML = formName.value
        cardText.innerHTML = intro.value

        //輸入錯誤時，要求在輸入 
    } else if (formName.value.length === 0) {
        formName.nextElementSibling.innerHTML = 'Required !'
        formName.classList.add("border-danger")
    } else if (intro.value.length === 0) {
        intro.nextElementSibling.innerHTML = 'Required !'
        intro.classList.add("border-danger")
    }

    //選擇theme
    if (theme.checked) {
        nameCard.className = 'light'
    } else {
        nameCard.className = 'dark'
    }

    //照片連結
    const img = 'https://assets-lighthouse.s3.amazonaws.com/uploads/user/photo/1221/thumb_dojo_test.001.jpeg'
    if (photo.value === '') {
        photo.placeholder = img
        cardImg.src = img
    } else {
        cardImg.src = photo.value
    }

})


// 自我介紹剩顯示剩餘字
form.addEventListener("input", function () {
    let count = event.target.value.length
    if (event.target.id === 'intro') {
        event.target.nextElementSibling.innerHTML = ` ${200 - count} remain`
    }
})

