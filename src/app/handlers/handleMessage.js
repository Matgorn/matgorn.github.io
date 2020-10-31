const handleMessage = () => {
    const form = document.querySelector('#contact-form');
    const sendBtn = document.querySelector('#submit-btn');
    const sendInfo = document.querySelector('#send-info');

    form.addEventListener('sumbit', (e) => {
        e.preventDefault();
    })

    const { fname, tel, subject } = form;

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('https://mlyn-ubogich.herokuapp.com/contact', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: fname.value,
                phone: tel.value,
                message: subject.value
            })
        })
        .then(response => response.json())
        .then(data => {
            sendInfo.innerHTML = data;
            setTimeout(() => {
                sendInfo.innerHTML = '';
            },4000)
        })
        .catch(err => {
            sendInfo.innerHTML = `Nie można wysłać wiadomości, spróbuj ponownie później lub skorzystaj z innej formy kontaktu`;
            setTimeout(() => {
                sendInfo.innerHTML = '';
            },4000)
        })

        fname.value = '';
        tel.value = '';
        subject.value = '';
    })
}

export default handleMessage;