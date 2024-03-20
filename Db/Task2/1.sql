CREATE TABLE chats (
    chatId SERIAL PRIMARY KEY,
    chatName VARCHAR(255)
);
CREATE TABLE messages (
    messageId SERIAL PRIMARY KEY,
    chatId INT,
    userId INT,
    msgText text,
);
