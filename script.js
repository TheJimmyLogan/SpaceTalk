const enterChat = () => {
    document.querySelector('.container-login').style.display = "none"
    document.querySelector('.container').style.display = "flex"
    const loginName = document.getElementById('loginNameInput').value;

    const memberBtn = document.createElement('button');
    memberBtn.innerText = loginName
    memberBtn.className = "blue-btn"
    document.getElementById('partyMembersSection').append(memberBtn)



    // <button class="blue-btn">Эрик</button>
}
document.getElementById('enterChatBtn').addEventListener('click', enterChat);

const goBackToLogin = () => {
    document.querySelector('.container-login').style.display = "flex"
    document.querySelector('.container').style.display = "none"
}
document.getElementById('goBackToLoginBtn').addEventListener('click', goBackToLogin);

