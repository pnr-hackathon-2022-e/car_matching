use actix_web::{get, web, App, HttpServer, Responder};
use serde::{Serialize, Deserialize};


#[derive(Serialize, Deserialize, Debug)]
struct SNSlinks {
    twitter: string,
    instagram: string,
    line: string
}

#[derive(Serialize, Deserialize, Debug)]
struct User {
    id: string,
    name: string,
    sns: snsLinks
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
