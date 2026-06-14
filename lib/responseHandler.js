const notFoundResponse = (res, message = "Resource not found") => {
  res.status(404).json({
    success: false,
    message,
  });
}

const successWithDataResponse = (res, data, message = "Request successful") => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
}

const successWithoutDataResponse = (res, message = "Request successful") => {
  res.status(200).json({
    success: true,
    message,
  });
}

const internalServerErrorResponse = (res, message = "Internal Server Error") => {
  res.status(500).json({
    success: false,
    message,
  });
}

module.exports = {
  notFoundResponse,
  internalServerErrorResponse,
  successWithDataResponse,
  successWithoutDataResponse
};