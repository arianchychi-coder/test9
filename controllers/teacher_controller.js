const TeacherModel = require("../models/teacher_model")
const { ObjectId } = require("mongodb");
const conectMongo = require("../utilities/mssql2_database")
const jwt = require("jsonwebtoken")
const seckretkey = "12345"
const getAll = async(req,res)=>{
    try {
        const teacher = await TeacherModel.getAll()
        res.json(teacher)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).send("خطا در ورود")
    }
}
const postTeaher = async(req,res)=>{
    const {teachername , teacherlastname , teachernationalcode , teacherplaceholder , teachercertificatenumber , teacherdate , teacheracademicyear , teacherdeagree , teacherphone , teacheremergencyphone , teacheredjucation , teacherlastschool , teacheradress , teacherpostcode} = req.body;

    if (!teachername || !teacherlastname || !teachernationalcode || !teacherplaceholder || !teachercertificatenumber || !teacherdate || !teacheracademicyear || !teacherdeagree || !teacherphone || !teacheremergencyphone || !teacheredjucation || !teacherlastschool || !teacheradress || !teacherpostcode) {
        return res.status(400).send("خطا در فیلد")
    }

    try {
        const result = await TeacherModel.addInfo(teachername , teacherlastname , teachernationalcode , teacherplaceholder , teachercertificatenumber , teacherdate , teacheracademicyear , teacherdeagree , teacherphone , teacheremergencyphone , teacheredjucation , teacherlastschool , teacheradress , teacherpostcode)

        if (!result) {
            return res.status(500).send("خطا در ثبت اطلاعات");
        }

        const user = await TeacherModel.getByNationalcode(teachernationalcode)

        if (!user) {
            return res.status(400).send("کاربر یافت نشد")
        }

        const token = jwt.sign({
            id:user.id , teachernationalcode:user.teachernationalcode , name:user.name
        },seckretkey,{expiresIn:"1h"})

        const db = await conectMongo()
        await db.collection("sumbite").updateOne(
            {_id : user.id},
            {$set:{token}}
        )

        return res.json({
            message:"موفقیت",
            token,
        })

    } catch (error) {
              console.log("Error: ",error)
        res.status(500).send("خطا")
    }
}
module.exports = {
    getAll,postTeaher
}