import mongoose, { Document, Schema } from "mongoose";

("use strict");

interface IImage extends Document {
  id: string;
  link: string;
}

interface ITerrain extends Document {
  terrainPostId: string;
  title: string;
  pictures: IImage[];
  createdAt: Date;
  modifiedAt: Date;
  body: string;
}

const imageSchema = new Schema<IImage>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
});

const terrainSchema = new Schema<ITerrain>({
  terrainPostId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  pictures: {
    type: [imageSchema], // Embed the ImageSchema
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const Image = mongoose.model<IImage>("Image", imageSchema);
export const Terrain = mongoose.model<ITerrain>("Terrain", terrainSchema);
