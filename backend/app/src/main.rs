use actix_web::{get, post, web, App, HttpServer, Responder, HttpResponse};
use serde::{Serialize, Deserialize};
use std::net::Ipv4Addr;

#[derive(Serialize, Deserialize, Debug)]
struct Session {
    name: String,
    pass: String
}

#[get("/session")]
async fn get_session(query: web::Query<Session>) -> impl Responder {
    HttpResponse::Ok().body(format!("client name is {}, session code is {}", query.name, query.pass))
}
#[get("/")]
async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello")
}
#[post("/posting")]
async fn posting() -> impl Responder {
    HttpResponse::Ok().body("posted")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(get_session)
            .service(index)
            .service(posting)
    })
        .bind((Ipv4Addr::UNSPECIFIED, 8000))?
        .run()
        .await
}
