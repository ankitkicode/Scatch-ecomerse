const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Image URL is required']
    },
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        required: [true, 'Background color is required']
    },
    pennalcolor: {
        type: String,
        required: [true, 'Pennal color is required']
    },
    textcolor: {
        type: String,
        required: [true, 'Text color is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
