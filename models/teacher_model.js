const conectMongo = require("../utilities/mssql2_database")

class TeacherModel {
  getAll = async()=>{
    try {
      const db = await conectMongo()
      const collection = db.collection("sumbite")
      const result = await collection.find({}).toArray()
      return result
    } catch (error) {
      console.log("Error",error)
      return []
    }
  }
  getByTeacherName = async(teachername)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teachername})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
    getByTeacherLastename = async(teacherlastname)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherlastname})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
      getByNationalcode = async(teachernationalcode)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teachernationalcode : teachernationalcode.toString()})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
        getByTeacherPlaceholder = async(teacherplaceholder)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherplaceholder})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
          getByTeacherCertificatenumber = async(teachercertificatenumber)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teachercertificatenumber})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
            getByTeacherDate = async(teacherdate)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherdate})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
    getByTeacherAcademicyear = async(teacheracademicyear)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacheracademicyear})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
      getByTeacherdeAgree = async(teacherdeagree)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherdeagree})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
        getByTeacherPhone = async(teacherphone)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherphone})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
          getByTeacherEmergencyPhone = async(teacheremergencyphone)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacheremergencyphone})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
            getByTeacherEdjucation = async(teacheredjucation)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacheredjucation})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
              getByTeacherLastschool = async(teacherlastschool)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherlastschool})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
                getByTeacherAdress = async(teacheradress)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacheradress})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
                  getByTeacherPostcode = async(teacherpostcode)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.findOne({teacherpostcode})
    return result
    } catch (error) {
      console.log("Error",error)
      return null;
    }
  }
  addInfo = async(teachername,teacherlastname,teachernationalcode,teacherplaceholder,teachercertificatenumber,teacherdate,teacheracademicyear,teacherdeagree,teacherphone,teacheremergencyphone,teacheredjucation,teacherlastschool,teacheradress,teacherpostcode)=>{
    try {
      const db = await conectMongo()
    const collection = db.collection("sumbite")
    const result = await collection.insertOne({teachername,teacherlastname,teachernationalcode,teacherplaceholder,teachercertificatenumber,teacherdate,teacheracademicyear,teacherdeagree,teacherphone,teacheremergencyphone,teacheredjucation,teacherlastschool,teacheradress,teacherpostcode})
    return result
    } catch (error) {
       console.log("Error",error)
      return null;
    }
  }
}
module.exports = new TeacherModel()