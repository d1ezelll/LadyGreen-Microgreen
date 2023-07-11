document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("first-modal").classList.add("open")
})

document.getElementById("footer_open_modal").addEventListener("click", function(){
    document.getElementById("first-modal").classList.add("open")
})

document.getElementById("close-model-win-btn").addEventListener("click", function(){
    document.getElementById("first-modal").classList.remove("open")
})

document.querySelector("#first-modal .modal_win_first_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("first-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});