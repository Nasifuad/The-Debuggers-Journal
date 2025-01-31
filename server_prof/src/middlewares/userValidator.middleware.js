export const userRegisterValidator = (schema) => async (req, res, next) => {
  try {
    console.log("Gere gere");
    const parsedBody = await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
};
