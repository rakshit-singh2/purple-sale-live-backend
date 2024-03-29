import { Schema, model } from 'mongoose';
const presaleDataSchema = new Schema({
    id: Number,
    logoUrl: String,
    bgLogoUrl: String,
    websiteUrl: String,
    facebook: String,
    twitter: String,
    github: String,
    instagram: String,
    discord: String,
    reddit: String,
    youtube: String,
    description: String,
});
const PresaleData = model("PresaleDataAlpha", presaleDataSchema);
export default PresaleData;
//# sourceMappingURL=presaleInfoModel.js.map