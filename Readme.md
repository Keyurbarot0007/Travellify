# ✈️ Travellify

Travellify is a travel blogging web application where users can share their travel experiences, view blogs from other travelers, and interact with the community through comments and likes.

## 🌐 Live Demo

Check out the live demo of the application: [Travellify](https://travellify.vercel.app/)

## ✨ Features

- 👤 User Registration and Login
- 📝 Create, Read, Update, and Delete Blogs
- 💬 Comment on Blogs
- ❤️ Like and Unlike Blogs
- 🏷️ View User Profiles
- 📤 Share Blogs on Social Media

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Image Upload:** Multer, imgbb-uploader
- **Styling:** Tailwind CSS, Bootstrap
- **Hosting:** Vercel (Frontend), Render (Backend)

## ⚙️ Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yash1Hingu/Travellify.git
   cd Travellify
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```plaintext
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   IMGBB_API_KEY=your_imgbb_api_key
   ```

4. **Start the application:**
   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend development server
   cd ../frontend
   npm start
   ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000`.

## 🧑‍💻 Usage

- **Register or Login:** Create a new account or log in with existing credentials.
- **Create a Blog:** Share your travel experiences by creating a new blog post.
- **View Blogs:** Browse through blogs from other users.
- **Interact:** Like and comment on blogs to engage with the community.
- **Profile:** View and edit your profile.

## 📂 Folder Structure

- `backend`: Contains the backend code with routes, models, and controllers.
- `frontend`: Contains the frontend code with React components, pages, and styles.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## 📧 Contact

If you have any questions or suggestions, feel free to contact at yash23hingu@gmail.com, keyurbarot0007@gmail.com.
