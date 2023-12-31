
#main imports 
from fastapi import FastAPI,File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import openai


#custom function imports 
#...


#initiate App
app = FastAPI()

#CORS - origins
origins = [
    "http://localhost:5173/",
    "http://localhost:4173/",
    "http://localhost:5174/",
    "http://localhost:4174/",
    "http://localhost:3000/",
    "http://localhost:5000/"
]



#CORS Middleware 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)
#check health
@app.get("/health")
async def check_health():
    return {"message": "healthy"}
