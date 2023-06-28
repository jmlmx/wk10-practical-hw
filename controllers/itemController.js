const Item = require("../models/item")

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find()
        if (!items) {
            throw new Error()
        } else {
        res.json(items)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body)
        await item.save()
        res.json({item})
    } catch (error) {
        res.status(400).json({message: "Please be sure to fill in the items name and price correctly."})
    }
}

exports.getAnItem = async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.id})
        if (!item || item === null) {
            res.status(400).json({message: "There is no such item..."})
        }
        res.json(item)
    } catch (error) {
        res.status(400).json({message: "There is no such item..."})
    }
}

exports.updateItem = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const item = await Item.findOne({_id: req.params.id})
        updates.forEach((update) => (item[update] =req.body[update]))
        await item.save()
        res.json(item)
    } catch (error) {
        res.status(400).json({message: "Please be sure to fill in the items name and price correctly."})
    }
}

exports.deleteAnItem = async (req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.id})
        if (!item) {
            res.status(400).send("There is no such item...")
        }
        await item.deleteOne()
        res.json({message:"Item Deleted"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}