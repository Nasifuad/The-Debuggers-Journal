export const JoiValidatorSignup = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = parsedBody;
    next();
  } catch (error) {
    next(error);
  }
};

export const JoiValidatorBlog = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = parsedBody;
    next();
  } catch (error) {
    next(error);
  }
};
