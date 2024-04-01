let buttonsContainer;
let chooseColor = "#00FF00";

const url = "http://api.vo0ov.fun:25023";


async function getinfo() {
    try {
        const response = await fetch(`${url}/getinfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function getpixels() {
    try {
        const response = await fetch(`${url}/getpixels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function setpixel(ind) {
    try {
        const params = new URLSearchParams({
            index: ind,
            color: chooseColor
        });
        
        const response = await fetch(`${url}/setpixel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}


async function greet() {
    const allPixels = await getpixels();

    // Предполагается, что allPixels - это массив цветов, где каждый элемент соответствует кнопке
    const buttons = Array.from(buttonsContainer.children)
        .filter(child => child.tagName === 'BUTTON');

    buttons.forEach((btn, index) => {
        // Применяем цвет кнопке
        btn.style.backgroundColor = allPixels[index];
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    const mainElement = document.querySelector('main');
    buttonsContainer = document.createElement('div');
    const info = await getinfo();

    for (let i = 1; i <= info.width * info.height; i++) {
        const newButton = document.createElement('button');
        newButton.classList.add('pixel');
        // newButton.textContent = `${i-1}`;
        newButton.addEventListener('click', async () => {
            await setpixel(i - 1);
        });
        buttonsContainer.appendChild(newButton);

        if (i % info.width === 0) {
            buttonsContainer.appendChild(document.createElement('br'));
        }
    }

    mainElement.appendChild(buttonsContainer);

    // Перемещаем вызов setInterval внутрь обработчика DOMContentLoaded
    setInterval(greet, 1000);
});
