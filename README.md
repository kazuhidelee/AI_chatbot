# Open AI Chatbot
<img width="730" alt="Screenshot 2024-06-26 at 4 02 57 PM" src="https://github.com/kazuhidelee/AI_chatbot/assets/122251831/74918e58-b643-472e-8fa9-8eeadf2c4be0">

## Tools Used
-Front-end: React + Chat UI Kit Library (https://github.com/chatscope/chat-ui-kit-react)<br>
-Back-end: Javascript

## How to run
- add a .env.local folder in the root and add OpenAI API key in the file
- Make sure dependencies are installed: `npm install`
- in terminal type: `npm run dev`

## Approach
This is a simple chat application using React.js and the Chat UI Kit library from Chatscope. The application allows users to interact with an AI chatbot powered by OpenAI where users can type messages, which are then sent to the backend (OpenAI's API). 
First, the message typed by the user is added to the messages array and it will be displayed in the chat UI. Then, the message will be processed into format that is suitable for the Open AI request format. After the conversion, the funciton will put all the required information (model, api message, system message) in JSON format and send it to the API. If processed successfully, the API will return response message from ChatGPT, and the function will display the message content onto the chat UI. 

## Challenges
- Integrating with the OpenAI API posed initial challenges due to unfamiliarity with its request format. 
- Parsing the API response to extract ChatGPT's message required debugging and understanding of the returned JSON structure.
- Securing and managing the API keys also required some extra online research. 

## Features
- Responses from ChatGPT are tailored with a directive to "Speak like a tour guide," enhancing suitability for answering queries about landmarks.
- Users receive a "ChatGPT is typing" indicator during response processing, enhancing the interactive feel of the chatbot. 

## To-Do
- Implement a close button to minimize the chatbox when not in use.
- Enable image uploads for landmark-related queries.
- Add suggestion prompts above the message input box to guide user interactions.
- Enable users to save conversations. 

