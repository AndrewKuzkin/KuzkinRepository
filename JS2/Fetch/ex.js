//Это делал для себя
const url = 'https://jsonplaceholder.typicode.com/posts/1'
//const url = 'http://gaugn.cemi.rssi.ru/'
//const url = 'https://kodaktor.ru/api/m/Content-Type: application/json'
async function fetchData() {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Вызываем функцию для получения данных
fetchData();


/*
В этом примере мы создаем асинхронную функцию fetchData, которая использует fetch для отправки GET запроса на сервер по указанному URL. Мы используем ключевое слово await, чтобы дождаться ответа от сервера, и метод json() для преобразования полученных данных в формат JSON.

Если запрос завершается успешно (HTTP статус 200), мы выводим полученные данные в консоль. В случае ошибки, мы ловим и обрабатываем ее с помощью блока catch.

Этот пример демонстрирует простой способ использования fetch для выполнения сетевых запросов в JavaScript. Он позволяет асинхронно получать данные с сервера и работать с ними в удобном формате.
*/