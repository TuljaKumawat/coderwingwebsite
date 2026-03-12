const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {

    try {

        const { productId } = req.body;

        const cartItem = new Cart({
            user: req.user.id,
            product: productId
        });

        await cartItem.save();

        res.json({ message: "Product added to cart" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};

exports.getCart = async (req, res) => {

    try {

        const cart = await Cart.find({ user: req.user.id })
            .populate("product");

        res.json(cart);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};