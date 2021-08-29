use lamedh_http::{
    lambda::{lambda, Context, Error},
    IntoResponse, Request,
};

#[lambda(http)]
#[tokio::main]
async fn main(
    request: Request,
    context: Context,
) -> Result<impl IntoResponse, Error> {
    dbg!(request, context);
    Ok("boop")
}
