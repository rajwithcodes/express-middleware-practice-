🚀 Express Middleware Practice 🛡️
# 🚀 Express Middleware Practice 🛡️

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)

---

This is a beginner-friendly Express.js project to practice **middleware** concepts like request logging, route-specific middleware, and simple token-based access control.


This is a beginner-friendly Express.js project to practice **middleware** concepts like request logging, route-specific middleware, and simple token-based access control.

## 🛠 Tech Stack
- **Node.js**
- **Express.js**

## 📂 Project Structure
├── app.js (your main server file) ├── package.json └── README.md

## 🚀 Features
- **Global Middleware** to log the HTTP method of every incoming request.
- **Route-Specific Middleware** under `/api`:
  - Checks if the query parameter `token` equals `"give access"`.
  - Grants or denies access based on the token value.
- **Routes**:
  - `GET /` → Returns "Root"
  - `GET /random` → Returns "HelloRandom"
  - `GET /api?token=give access` → Returns "Data" if token is correct, otherwise "Access denied!".

## 🛡️ How Access Token Works for `/api`

When any request is made to `/api`, a special **middleware** checks for a **query parameter** named `token`.

- If the token is **exactly** `"give access"`, the middleware logs `"Access Granted"` and **allows** the request to move forward to the final route, which sends back `"Data"`.
- If the token is **missing** or **incorrect**, the middleware immediately **responds with** `"Access denied!"`, and stops further processing.

### 🔥 Example Scenarios

| Request URL                            | Token Value     | Server Behavior                 | Response         |
|:----------------------------------------|:----------------|:---------------------------------|:-----------------|
| `/api?token=give access`                | give access     | Access granted, continue to route | `Data`         |
| `/api?token=wrong`                      | wrong           | Access denied immediately        | `Access denied!` |
| `/api` (no token)                       | undefined       | Access denied immediately        | `Access denied!` |

This simulates a simple **authorization mechanism** where access is controlled based on a **token**.

