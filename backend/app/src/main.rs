use actix_web::{get, post, web, App, HttpServer, Responder, HttpResponse};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Session {
    name: String,
    pass: String
}

#[post("/caller2")]
async fn call1(rec: web::Json<Session>) -> String {
    format!("{}", rec.pass)
}

#[post("/caller1")]
async fn call2(rec: web::Json<Session>) -> String {
    format!("{}", rec.pass)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(call2).service(call1))
        .bind("127.0.0.1:8000")?
        .run()
        .await
}
