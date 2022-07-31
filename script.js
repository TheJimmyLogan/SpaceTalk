const resizeVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
resizeVh();

const enterChat = () => {
    document.querySelector('.container-login').style.display = "none"
    document.querySelector('.container').style.display = "flex"
    const loginName = document.getElementById('loginNameInput').value;

    const memberBtn = document.createElement('button');
    memberBtn.innerText = loginName
    memberBtn.className = "blue-btn"
    document.getElementById('partyMembersSection').append(memberBtn)


    const memberOption = document.createElement('option');
    memberOption.innerText = loginName
    document.getElementById('partySelectMobile').append(memberOption);
}

document.getElementById('enterChatBtn').addEventListener('click', enterChat);

const goBackToLogin = (e) => {
    document.querySelector('.container-login').style.display = "flex"
    document.querySelector('.container').style.display = "none"
}
document.querySelectorAll('#goBackToLoginBtn').forEach(
    btn => btn.addEventListener('click', goBackToLogin)
);

const enableEnterChatBtn = (e) => {
    if (e.target.value) {
        document.getElementById('enterChatBtn').disabled = false;
    } else {
        document.getElementById('enterChatBtn').disabled = true;
    }
}

document.getElementById('loginNameInput').addEventListener('input', enableEnterChatBtn);


