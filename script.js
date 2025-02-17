// Check if user is already logged in
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
        showApp();
    }
});

// DOM Elements
const authContainer = document.getElementById("auth-container");
const appContainer = document.getElementById("app-container");
const authForm = document.getElementById("auth-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signupButton = document.getElementById("signup-button");
const loginButton = document.getElementById("login-button");
const authMessage = document.getElementById("auth-message");

// Event Listeners
authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (e.submitter.id === "signup-button") {
        signUp(username, password);
    } else if (e.submitter.id === "login-button") {
        login(username, password);
    }
});

// Functions
function signUp(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        authMessage.textContent = "Username already exists. Please choose another.";
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", username);
        showApp();
    }
}

function login(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("currentUser", username);
        showApp();
    } else {
        authMessage.textContent = "Invalid username or password.";
    }
}

function showApp() {
    authContainer.style.display = "none"; // Hide login form
    appContainer.style.display = "flex"; // Show main app
    loadChatMessages();
    loadPosts();
}

function loadChatMessages() {
    const chatMessages = document.getElementById("chat-messages");
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    chatMessages.innerHTML = messages.map(msg => `<div><strong>${msg.user}:</strong> ${msg.text}</div>`).join("");
}

function loadPosts() {
    const postsContainer = document.getElementById("posts-container");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    postsContainer.innerHTML = posts.map(post => `<div><strong>${post.user}:</strong> ${post.text}</div>`).join("");
}

// Chat and Post Functionality
document.getElementById("send-button").addEventListener("click", () => {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    if (message) {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({ user: localStorage.getItem("currentUser"), text: message });
        localStorage.setItem("messages", JSON.stringify(messages));
        loadChatMessages();
        messageInput.value = "";
    }
});

document.getElementById("post-button").addEventListener("click", () => {
    const postInput = document.getElementById("post-input");
    const post = postInput.value.trim();
    if (post) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ user: localStorage.getItem("currentUser"), text: post });
        localStorage.setItem("posts", JSON.stringify(posts));
        loadPosts();
        postInput.value = "";
    }
});