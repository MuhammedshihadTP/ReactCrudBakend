const express = require("express");
const user = require("../model/userModel");

const userModel = require("../model/userModel");

module.exports = {
  getData: async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
    }
  },

  postData: async (req, res) => {
    const data = req.body;
    const dataSave = new userModel(data);
    await dataSave.save();
    res.status(201).json({
      message: "User Added",
    });
  },

  deleteData: async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    res.status(201).json(user);
  },

  findData: async (req, res) => {
    const data = await userModel.findById(req.params.id);
    res.status(200).json(data);
  },

  updateData: async (req, res) => {
    const userdId = req.params.id;
    const { email, name, phone } = req.body;
    const user = await userModel.findByIdAndUpdate(userdId, {
      $set: {
        email,
        name,
        phone,
      },
    });
    res.json({ message: "success" }).status(200);
  },
};
