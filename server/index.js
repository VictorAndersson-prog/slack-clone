import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
    res.send("Victor");
});

const channelsShecma = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 30,
        },
    },
    { timestamps: true }
);

const Channel = mongoose.model("channels", channelsShecma);

app.get("/channels", async (req, res) => {
    const channels = await Channel.find();
    res.send(channels);
});

app.listen(3000, async () => {
    await mongoose.connect(
        "mongodb+srv://user:admin@cluster0.sttbdxj.mongodb.net/?retryWrites=true&w=majority"
    );
});
