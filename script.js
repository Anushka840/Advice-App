let count = 0;

function startAdvice() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('advicePage').style.display = 'block';
}

async function getAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let advice = await response.json();
    console.log(advice.slip.advice);
    count++;
    document.getElementById('advice').innerText = advice.slip.advice;
    document.getElementById('count').innerText = `You have read ${count} pieces of advice today`;
}

function goBack() {
    document.getElementById('advicePage').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}


