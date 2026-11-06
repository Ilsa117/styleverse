from fastapi import FastAPI

app = FastAPI(title="StyleVerse API")


@app.get("/")
def health():
    return {"status": "ok", "app": "StyleVerse"}
