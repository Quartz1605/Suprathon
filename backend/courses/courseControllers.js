import { CourseModel } from "../db/db.js";
import { InstituteModel } from "../db/db.js";

export const addCourseController = async(req, res) =>{
    
    const {Title, Language, Price, shortDesc, TotalHours} = req.body

    if(!Title || !Language || !Price || !shortDesc || !TotalHours){
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

    const course = await CourseModel.create(req.body)

    if(course){
        return res.status(201).json({"message" : "Course Created Successfully","course" : course})
    }else{
        return res.status(400).json({"message" : "Error creating issues"})
    }
    
    
}

export const getCourseDetailsController = async(req, res) => {
    const {id} = req.params
    try{
        const courseData = await CourseModel.findById(id)
        return res.status(200).json({
        "course":courseData
    })
    }
    catch(error){
        return res.status(400).json({"message" : "Some backend error " + error})
    }
}

export const getAllCoursesController = async (req, res) => {
    try {
        const allCourses = await CourseModel.find({});
        return res.status(200).json({
            courses: allCourses
        });
    }catch (error) {
        return res.status(500).json({
            message: "Failed to fetch courses",
            error: error.message
        });
    }
};
