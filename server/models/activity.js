import mongoose from 'mongoose';
import activitylog from 'mongoose-activitylog';
 
const ActivitySchema = new mongoose.Schema({
    IP: {
        Type: String
    }
});
ActivitySchema.plugin(activitylog);
 
const Activity = mongoose.model('Activity', ActivitySchema);
export default Activity;
