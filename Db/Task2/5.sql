SELECT u.id AS userId, u.firstname AS userName, u.secondname AS userLastname,
       c.chatid AS chatId, c.chatname AS chatName,
       MAX(m.messageid) AS lastMessageId, m.msgtext AS lastMessageText
FROM users u
LEFT JOIN messages m ON u.id = m.userid
LEFT JOIN chats c ON m.chatid = c.chatid
GROUP BY u.id, u.firstname, u.secondname, c.chatid, c.chatname, m.msgtext;
