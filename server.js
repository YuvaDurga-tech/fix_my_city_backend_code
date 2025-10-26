import mongoose from "mongoose";

// Define the schema for a civic complaint
const complaintSchema = mongoose.Schema({
    // User who reported the complaint (simplified for this prototype, typically linked to a User model)
    reporterId: {
        type: String,
        required: true,
        default: 'anonymous', // Default to 'anonymous' if no user ID is provided
    },
    title: {
        type: String,
        required: [true, 'Please add a title for the issue'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    category: {
        type: String,
        required: [true, 'Please specify a category'],
        enum: ['Pothole', 'Garbage & Dumping', 'Streetlight Failure', 'Water Leak', 'Road Damage', 'Other'],
    },
    details: {
        type: String,
        required: [true, 'Please describe the issue details'],
    },
    location: {
        address: {
            type: String,
            required: [true, 'Please provide the location address'],
        },
        // GeoJSON for storing coordinates (useful for mapping and proximity queries)
        coordinates: {
            type: {
                type: String,
                enum: ['Point'], // 'location.coordinates.type' must be 'Point'
                default: 'Point',
            },
            // [longitude, latitude] format
            coordinates: {
                type: [Number],
                required: [true, 'A location (longitude, latitude) is required'],
            },
        },
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'In Progress', 'Resolved'],
        default: 'Pending',
    },
    photoUrl: {
        type: String,
        default: 'https://placehold.co/600x400/0284C7/ffffff?text=No+Image', // Placeholder image URL
    },
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create a geospatial index for efficient location-based queries
complaintSchema.index({ "location.coordinates": "2dsphere" });

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
