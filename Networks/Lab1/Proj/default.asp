<%@ Language=VBScript %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title> Форма для тестирования на SQL-инъекции</title>
</head>
<body>

<%
Dim userInput
userInput = Request.Form("userInput")

If Request.ServerVariables("REQUEST_METHOD") = "POST" Then
%>
    <p>Вы ввели: <%= userInput %></p>
<% End If %>

<form method="post">
    <label for="userInput">Введите текс, содержащий ключевые слова Sql:</label>
    <input type="text" id="userInput" name="userInput">
    <button type="submit">Отправить</button>
</form>

</body>
</html>
