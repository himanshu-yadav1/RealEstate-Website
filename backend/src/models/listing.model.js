import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        regularPrice: {
            type: Number,
            required: true
        },
        discountedPrice: {
            type: Number,
            required: true
        },
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        furnished: {
            type: Boolean,
            required: true
        },
        parking: {
            type: Boolean,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        offer: {
            type: Boolean,
            required: true
        },
        imageUrls: {
            type: Array,
            required: true
        },
        user: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
    
)

export const Listing = mongoose.model("Listing", listingSchema)