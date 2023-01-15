import './assets/css/main.css'
import QrCode from 'qrcode'

const canvas = document.querySelector('#qr_code_image__container canvas')
const qrCodeInput = document.querySelector('#qr_code_input')
const downloadQrCodeBtn = document.querySelector('#download_qr_code')
const cristLinkedinUrl = 'https://www.linkedin.com/in/cristóvão-s-987536208'
const descriptionSpanText = document.querySelector('.qr_code__description span')

function handleQrCodeImage(text) {
    if (!text) text = cristLinkedinUrl
    QrCode.toCanvas(canvas, text, (error) => error && console.error(error))

    if(text === cristLinkedinUrl) descriptionSpanText.textContent = 'visit my linkedin profile and know more about me.'
    else descriptionSpanText.textContent = `read '${text}'`

}
function downloadCanvasLikeImg() {
    const link = document.createElement('a');
    link.download = 'qr_code.png';
    link.href = canvas.toDataURL()
    link.click();
}

qrCodeInput.addEventListener('input', (event) => handleQrCodeImage(event.target.value))
downloadQrCodeBtn.addEventListener('click', downloadCanvasLikeImg)

handleQrCodeImage(cristLinkedinUrl)