// Error is the default class of node
class Errorhandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Errorhandler.captureStackTrace(this, this.constructor);
  }
}


module.exports={
    Errorhandler
}