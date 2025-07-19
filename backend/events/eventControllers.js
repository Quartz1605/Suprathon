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
    const newEvent = new EventModel({
        Title,
        shortDesc,
        Creator,
        Category,
        endDate,
        eventTypeMode,
        eventTypeMember,
        Price,
        Prizes
    })

    console.log(req.body);
    await newEvent.save()
    res.send("Event Added")

    console.log(newEvent)
}