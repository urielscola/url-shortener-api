# URL Shortener Service

Study project heavilly inspired by services like Bit.ly.

# Tech Stack

- Node.js
- Typescript
- Express.js
- MongoDB
- Mongoose
- Joi

# Features!

The project has, by now, those features:

| Endpoint        | Method | Feature      |
| --------------- | ------ | ------------ |
| /               | GET    | Static Home  |
| /pages/internal | GET    | Static pages |
| /app/\*         | GET    | React app    |
| /:code          | GET    | Redirect     |
| /api/shorten    | POST   | Shorten URL  |

# Roadmap

- [x] Shorten URLs
- [x] Find and redirect URLs
- [ ] Create home and internal pages
- [ ] Create not found/create page
- [ ] Implement cache
- [ ] Create account
- [ ] User internal dashboard-like pages
- [ ] Analytics
- [ ] Custom URLs
- [ ] Configurable wait screen
