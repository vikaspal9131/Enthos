project/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── about.html
│   │   ├── login.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── styles/
│   │       ├── style.css
│   │       └── responsive.css
│   ├── scripts/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── dashboard.js
│   ├── package.json (if using npm for frontend tools like bundlers)
│   ├── webpack.config.js (optional, for module bundling)
│   └── .env (optional, for frontend environment variables)
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── modelController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── sessionModel.js
│   │   └── predictionModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── modelRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   ├── dbConnect.js
│   │   ├── config.js
│   │   └── logger.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── ml_model/
│   ├── data/
│   │   ├── train/
│   │   ├── test/
│   │   └── raw/
│   ├── notebooks/
│   │   ├── model_training.ipynb
│   │   └── data_preprocessing.ipynb
│   ├── src/
│   │   ├── model.py
│   │   ├── preprocess.py
│   │   └── predict.py
│   ├── saved_models/
│   │   └── model_v1.h5
│   ├── requirements.txt
│   ├── app.py (for running the model as a Flask/FastAPI app)
│   └── .env
├── README.md
└── .gitignore



add me name == sourabh 