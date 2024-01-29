class HTTPCodes {

static SuccesfullResponse = {
    Ok: 200
}

  static ClientSideErrorResponse = {
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
  };
}

const HTTPMethods = {

  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH:"PATCH",
  DELETE:"DELETE"
}
  


export { HTTPCodes, HTTPMethods}


