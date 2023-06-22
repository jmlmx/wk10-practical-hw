const express = require("express")
const router = express.Router()
const itemController = require("../controllers/itemController")


router.get("/", itemController.getItems)// get all created items
router.post('/', itemController.createItem)//create an item
router.get("/:id", itemController.getAnItem)//get a specific item 
router.put('/:id', itemController.updateItem)// update an existing item
router.delete("/:id", itemController.deleteAnItem)// delete a specific item



module.exports = router