use actix_web::{get, App, HttpServer, Responder};
use serde::{Serialize, Deserialize};


#[derive(Serialize, Deserialize, Debug)]
struct SNSLinks {
    twitter: String,
    instagram: String,
    line: String
}

#[derive(Serialize, Deserialize, Debug)]
struct User {
    id: String,
    name: String,
    sns: SNSLinks
}


#[get("/hello")]
async fn index() -> impl Responder {
    format!("Hello")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(index))
        .bind("127.0.0.1:8000")?
        .run()
        .await
}
