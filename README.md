# Simple Chat Room with Push Notifications

A modern web application showcasing push notifications using SvelteKit, featuring several notable technical implementations:

## 🔍 Key Technical Highlights

1. Progressive Web App (PWA) Implementation using vite-pwa-org.netlify.app
2. Google Authentication Flow with help of lucia-auth.com
3. Database Architecture
	- Efficient schema design using Drizzle ORM
	- Type-safe database operations
	- Relational data modeling for:
  		- Users
    	- Auth Sessions
    	- Messages
      	- Notifications
       	- Push Subscriptions
4. UI/UX Design
	- Responsive layout using Tailwind CSS
	- Clean navigation structure
	- Single chatroom

## 💡 Interesting Architectural Decisions

1. **Session Management**
	- Custom implementation rather than using an auth library
	- OAuth2 flow with Google

2. **Push Notification System**
- Web Push API integration
- Subscription management
- Server-to-client notification flow

3. **Type Safety**
- Comprehensive TypeScript implementation
- Strong typing across the application
- Type inference for database operations

## 🛠️ Technical Stack

- **Frontend**: SvelteKit, Tailwind CSS
- **Backend**: Node.js
- **Database**: Turso
- **Authentication**: Google OAuth2
- **ORM**: Drizzle
- **PWA**: Vite PWA

## ✨ Notable Features

- Real-time messaging
- Push notifications
- OAuth authentication
- Offline support
- Type-safe database operations
- Auto-updating service worker

This project serves as an excellent example of modern web development practices, combining powerful technologies to create a robust and user-friendly application.

---
What particularly stands out is how the project maintains a clean architecture while implementing complex features like push notifications and authentication, making it a valuable reference for similar implementations.
