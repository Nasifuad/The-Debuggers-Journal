export const JoiValidatorSignup = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = parsedBody;
    next();
  } catch (error) {
    console.error(error);
  }
};
