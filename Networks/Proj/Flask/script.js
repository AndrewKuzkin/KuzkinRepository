$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault();
        var textInput = $('#textInput').val();
        
        $.ajax({
            type: 'POST',
            url: '/',
            data: {text: textInput},
            success: function(response) {
                $('#output').text('Содержимое строки: ' + response);
            }
        });
    });
});
/*
Эти три компонента вместе создадут простую веб-страницу с HTML-формой, серверным скриптом на Python с использованием Flask и клиентским скриптом на JavaScript с использованием jQuery для отправки данных из формы на сервер и отображения результата на странице. 
Важно убедиться, что у вас установлен Flask для Python и jQuery для JavaScript.
*/