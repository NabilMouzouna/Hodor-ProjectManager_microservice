import { model, Schema } from 'mongoose';


const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  developer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  providers: {
    type: [String],
    required: true
  }
}, { timestamps: true });

export default model("Project", projectSchema);
