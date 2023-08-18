/* eslint-disable consistent-return */
const Joi = require('joi');

const validateApp = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    // is_deleted: Joi.boolean().default(false),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next(); // If validation passes, proceed to the next middleware/controller
};

const validateUpdateApp = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    description: Joi.string().min(5),
    is_deleted: Joi.boolean(),
    is_active: Joi.boolean(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateEvent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().max(50).min(5).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateUpdateEvent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50),
    description: Joi.string().min(5).max(50),
    is_deleted: Joi.boolean(),
    is_active: Joi.boolean(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateNotification = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    templatebody: Joi.string().min(10).max(250).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};
const validateUpdateNotification = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    description: Joi.string().min(5),
    templatebody: Joi.string().min(10).max(250),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = {
  validateApp,
  validateUpdateApp,
  validateEvent,
  validateUpdateEvent,
  validateNotification,
  validateUpdateNotification,
};