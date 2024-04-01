from flask import Flask, request
from flask_cors import CORS
import json


WIDTH = 10
HEIGHT = 10
_map = ['#00000'] * (WIDTH * HEIGHT)


app = Flask('PixelArt Server')
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    text = '<h1>Hello!</h1>'
    print(text)
    return text


@app.route('/getinfo', methods=['POST'])
def get_info():
    text = json.dumps({'width': WIDTH, 'height': HEIGHT}) + '\n'
    print(text)
    return text


@app.route('/getpixels', methods=['POST'])
def get_pixels():
    text = json.dumps(_map) + '\n'
    print(text)
    return text


@app.route('/setpixel', methods=['POST'])
def set_pixel():
    index = request.form.get('index')
    color = request.form.get('color')

    # Первый Этап проверки
    if not (index and color):
        text = 'ERROR! Указаны не все аргументы.\n'
        print(text)
        return text
    try:
        int(index)
    except:
        text = 'ERROR! i должен быть числом.\n'
        print(text)
        return text

    # Второй этап проверки
    try:
        _map[int(index)]
    except:
        text = 'ERROR! Некорректные x и y. Используйте POST /getinfo.\n'
        print(text)
        return text

    _map[int(index)] = color
    text = f'OK! Пиксель установлен по индексу {index} с цветом {color}\n'
    print(text)
    return text


if __name__ == '__main__':
    from waitress import serve
    serve(app, host='0.0.0.0', port=8080)
