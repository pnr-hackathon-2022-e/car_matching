use actix_web::{get, post, web, App, HttpServer, Responder, HttpResponse};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
struct Session {
    name: String,
    pass: String
}

#[post("/receive")]
async fn receive(rec: web::Json<Session>) -> String {
    format!("{}", rec.pass)
}

#[post("/call")]
async fn call(rec: web::Json<Session>) -> String {
    format!("{}", rec.pass)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(call).service(receive))
        .bind("127.0.0.1:8000")?
        .run()
        .await
}
