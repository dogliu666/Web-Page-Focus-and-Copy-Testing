const contentDiv = document.getElementById('content');
const messageP = document.getElementById('message');
const screenshotButton = document.getElementById('screenshot-button');
const screenshotContainer = document.getElementById('screenshot-container');

window.addEventListener('blur', () => {
    messageP.textContent = '主人，看看我嘛！';
    messageP.style.color = 'red';
    messageP.style.fontSize = '30px';
    contentDiv.style.color = 'red';
    contentDiv.style.borderColor = 'red';
    document.body.style.backgroundColor = '#f8d7da';
});

window.addEventListener('focus', () => {
    messageP.textContent = '主人别离开我嘛';
    messageP.style.color = 'black';
    messageP.style.fontSize = '30px';
    contentDiv.style.color = 'black';
    contentDiv.style.borderColor = 'black';
    document.body.style.backgroundColor = '#ffffff';
});
window.addEventListener('blur', () => {
    // 截屏功能
    takeScreenshot();
});

function takeScreenshot() {
    html2canvas(document.body).then(canvas => {
        // 将截屏结果显示在页面上
        const screenshotContainer = document.createElement('div');
        screenshotContainer.id = 'screenshot-container';
        screenshotContainer.appendChild(canvas);
        document.body.appendChild(screenshotContainer);
    });
}
document.addEventListener('copy', (event) => {
    alert('内容已被复制！');
});