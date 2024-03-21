SELECT  u.firstname, u.secondname ,MAX(m.messageid) AS lastMessageId, m.msgtext 
FROM users u
LEFT JOIN messages m ON u.id = m.userid
LEFT JOIN chats c ON m.chatid = c.chatid
	GROUP BY u.id, u.firstname, u.secondname, c.chatid, c.chatname, m.msgtext;
