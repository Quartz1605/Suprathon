import { CourseModel } from "../db/db.js";

export const addCourseController = async(req, res) =>{
    const {Title, Creator, Language, Price, shortDesc, TotalHours} = req.body
    const newCourse = new CourseModel({
        Title,
        Creator,
        Language,
        Price,
        shortDesc,
        TotalHours
    })

    await newCourse.save()
    res.send("Course Added")
    console.log(newCourse)
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
        const allCourses = await CourseModel.find();
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
