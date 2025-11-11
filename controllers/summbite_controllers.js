const StudentModel = require("../models/sumbite_model")
const jwt = require("jsonwebtoken")
const conectMongo2 = require("../utilities/mssql_database")
const seckretkey2 = "123456"


const getAll2=async(req,res)=>{
    try {
        const student = await StudentModel.getAll2()
    return res.json(student)
    } catch (error) {
        console.log("Error",error)
        res.status(500).send("خطا")
    }
}
const postStudent = async(req,res)=>{
    const {first_name, last_name, father_name, mother_name, national_code,
        birth_certificate_place, birth_certificate_number, birth_date,
        academic_year, education_level, student_phone, father_phone,
        father_job, mother_phone, emergency_phone, mother_job,
        guardian_name, guardian_relation, guardian_phone,
        previous_school_name, home_address, residence_status,
        postal_code, home_phone} = req.body;

        if (!first_name || !last_name || !father_name || !mother_name || !national_code || !birth_certificate_place || !birth_certificate_number || !birth_date || !academic_year || !education_level || !student_phone || !father_phone || !father_job || !mother_phone || !emergency_phone || !mother_job || !guardian_name || !guardian_relation || !guardian_phone || !previous_school_name || !home_address || !residence_status || !postal_code || !home_phone) {
            return res.status(400).send("خطا در فیلد")
        }

        try {
            const result = await StudentModel.addInfo2(first_name, last_name, father_name, mother_name, national_code,
        birth_certificate_place, birth_certificate_number, birth_date,
        academic_year, education_level, student_phone, father_phone,
        father_job, mother_phone, emergency_phone, mother_job,
        guardian_name, guardian_relation, guardian_phone,
        previous_school_name, home_address, residence_status,
        postal_code, home_phone)
        if (!result) {
             return res.status(500).send("خطا در ثبت اطلاعات");
        }
        
        const user = await StudentModel.getNationalcode(national_code)
        if (!user) {
            return res.status(400).send("کاربر یافت نشد")
        }

        const token = jwt.sign({
            id:user.id , national_code:user.national_code , name:user.name
        },seckretkey2,{expiresIn:"1h"})

        const db = await conectMongo2()
        await db.collection("sumbite2").updateOne(
            {_id:user.id},
            {$set : {token}}
        )

        return res.json({
            message:"موفقیت",
            token,
            user
        })
        
        } catch (error) {
            console.log("Error: ",error)
        res.status(500).send("خطا")
        }
}
module.exports = {
    getAll2,postStudent
}
