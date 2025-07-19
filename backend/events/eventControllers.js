import {EventModel} from "../db/db.js";

export const addEventController = async(req, res) =>{
    const {
        Title,
        shortDesc,
        Creator,
        Category,
        endDate,
        eventTypeMode,
        eventTypeMember,
        Price,
        Prizes
    } = req.body

    if(!Title || !Creator || !Price || !shortDesc || !Category || !endDate || !eventTypeMode || !eventTypeMember || !Prizes){
        return res.status(400).json({"message" : "Necessary details are not provided."})
    }

    const creatorId = req.id

    const creator = await InstituteModel.findOne({
        "_id" : creatorId
    })
    
    console.log(creator.name)

    req.body.CreatorID = creator._id
    req.body.CreatorName = creator.name
    
    if(!creator){

       return res.status(401).json({"message" : "Institute not found."})
        
    }

    const event = await EventModel.create(req.body)

    if(event){
        return res.status(201).json({"message" : "Event Created Successfully","event" : event})
    }else{
        return res.status(400).json({"message" : "Error creating issues"})
    }

    console.log(event)
}

export const getEventDetailsController = async(req, res) => {
    const {id} = req.params
    try{
        const eventData = await EventModel.findById(id)
        return res.status(200).json({
        "event":eventData
    })
    }
    catch(error){
        return res.status(400).json({"message" : "Some backend error " + error})
    }
}

export const getAllEventsController = async (req, res) => {
    try {
        const allEvents = await EventModel.find({});
        console.log(allEvents)
        return res.status(200).json({
            events: allEvents
        });
    }catch (error) {
        return res.status(500).json({
            message: "Failed to fetch courses",
            error: error.message
        });
    }
};