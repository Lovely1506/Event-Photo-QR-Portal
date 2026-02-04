# Event-Photo-QR-Portal

A minimal and aesthetic React application to access event photos via QR codes.  
Users can upload images for an event, view them in a responsive gallery, and scan the QR code to access event photos.

---

## 🌟 Features

- Generate QR code for events
- Upload multiple photos (images & PDFs)
- Responsive image gallery
- Minimal and aesthetic design
- Future scope: multiple events and face recognition

---

## 💻 Tech Stack

- **React 18**
- **Vite** (frontend bundler)
- **CSS Grid & Flexbox**
- [react-qr-code](https://www.npmjs.com/package/react-qr-code) (for QR code generation)

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd event-photo-qr-portal
```

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

4. Open browser at:

http://localhost:5173/ 

📝 Usage

1. Open the app in your browser

2. Scan the QR code to access event photos

3. Upload photos to display them in the gallery

4. Hover on images for slight zoom effect

5. Future: Add multiple events or face recognition features

## 📸 Screenshots

![Event Photo QR Portal](assets/screenshot.png)
<img width="1920" height="1080" alt="Screenshot 2026-02-04 205623" src="https://github.com/user-attachments/assets/c48a3f32-6e75-4be7-82fa-c8583272c128" />
<img width="1920" height="1080" alt="Screenshot 2026-02-04 204307" src="https://github.com/user-attachments/assets/3a928210-a06f-476c-bead-a321ecd93742" />

## 🔗 Live Demo

Check the live project here: [Event Photo QR Portal](https://your-hosting-link.com)

📂 Folder Structure
src/
├─ components/
│ └─ QRPage.jsx # QR code + gallery component
├─ App.jsx
├─ main.jsx
└─ index.css
public/
└─ index.html

🔮 Future Scope

Multiple events with unique QR codes

Face recognition to automatically tag guests in photos

PDF/album downloads for events

Dark mode and theme customization
