CREATE TABLE messages (
    messageID SERIAL PRIMARY KEY,
    chatID INT,
    userID INT,
    msgText text
);
