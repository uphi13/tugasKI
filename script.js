function encryptText() {
    const plaintext = document.getElementById('plaintext').value;
    const key = document.getElementById('key').value;

    if (key.length !== 16) {
        alert('Kunci enkripsi/dekripsi harus 16 byte (karakter).');
        return;
    }

    const encryptedBytes = aesjs.utils.utf8.toBytes(plaintext);
    const aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.utf8.toBytes(key), new aesjs.Counter(5));
    const encryptedText = aesjs.utils.hex.fromBytes(aesCtr.encrypt(encryptedBytes));

    document.getElementById('ciphertext').value = encryptedText;
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('output-container').style.display = 'flex';
}

function decryptText() {
    const ciphertext = document.getElementById('plaintext').value;
    const key = document.getElementById('key').value;

    if (key.length !== 16) {
        alert('Kunci enkripsi/dekripsi harus 16 byte (karakter).');
        return;
    }

    const encryptedBytes = aesjs.utils.hex.toBytes(ciphertext);
    const aesCtr = new aesjs.ModeOfOperation.ctr(aesjs.utils.utf8.toBytes(key), new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

    document.getElementById('ciphertext').value = decryptedText;
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('output-container').style.display = 'flex';
}

function backToInput() {
    document.getElementById('input-container').style.display = 'flex';
    document.getElementById('output-container').style.display = 'none';
}

function resetInput() {
    document.getElementById('plaintext').value = '';
    document.getElementById('key').value = '';
    document.getElementById('ciphertext').value = '';
}