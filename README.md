# Dunstagram Backend

Dunstagram Backend is the server-side component of the [Dunstagram](https://github.com/jindun619/dunstagram) project, built using **NestJS**. It provides RESTful APIs for managing **users**, **posts**, and **comments**, supporting full CRUD (Create, Read, Update, Delete) operations. The backend is designed with a modular structure, ensuring clean and maintainable code.

## 📚 Tech Stack

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 💡 Features

### **CRUD Operations**

- **Users**: Create, read, update, and delete user profiles.
- **Posts**: Create, read, update, and delete posts.
- **Comments**: Create, read, update, and delete comments.

### **Modular Structure**

- Each feature (users, posts, comments) is organized into its own module, containing:
  - **Controller**: Handles incoming requests and returns responses.
  - **Service**: Implements business logic.
  - **Entity**: Defines the data model.

### **Data Validation**

- Uses **DTOs (Data Transfer Objects)** to enforce data types and structure.
- Leverages **class-validator** and **class-transformer** for robust validation and transformation of incoming data.

## Key Learnings

- Built a RESTful API using NestJS with a modular architecture.
- Implemented DTOs for type-safe data handling.
- Used class-validator and class-transformer for robust data validation and transformation.
- Gained experience in structuring backend applications with controllers, services, and entities.
