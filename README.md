#  eCommerce Assignment

## 📖 About the Project

**Tech Stack**: ReactJS,Tailwind CSS , Redux ToolKit ,Firebase

xShopify is a eCommerce application built using FakeAPI : https://fakeapi.platzi.com/en. It includes search , filter as well as login/signup functionality . I have also have cart functionality where user can checkout their products in the cart . 



## ** Installation**

### **🔹 Manual Installation**
Ensure you have **Node.js**, **npm**,  installed.

1. **Clone the repository**  
   ```sh
   git clone https://github.com/Piyushxz/eCommerceAssignment.git
   cd frontend
2. **Install Dependencies**  
    
    npm install

3. **Add .env**
    Create a .env file and all the environment variables from firebase as given in firbase.ts
4. **Run Project**
    ```sh
    npm run dev

### **🔹 Docker Installation**
1. **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/project-name.git
   cd frontend
2. **Build the Image**
    
    docker build -t ecommerce-app .
3. **Add .env**
    Create a .env file and all the environment variables from firebase as given in firbase.ts

4. **Start the container**
    ```sh
    docker run --env-file ./frontend/.env -p 5173:5173 ecommerce-app


