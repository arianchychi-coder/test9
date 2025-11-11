const conectMongo2 = require("../utilities/mssql_database")
class StudentModel {
  getAll2 = async()=>{
    try {
      const db = await conectMongo2()
      const collection = db.collection("sumbite2")
      const result = await collection.find({}).toArray()
      return result
    } catch (error) {
      console.log("Error: ",error)
      return []
    }
  }
  getName = async(first_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({first_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
    getLastname = async(last_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({last_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
      getFathername = async(father_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({father_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
        getMothername = async(mother_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({mother_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
         getNationalcode = async (national_code) => {
  try {
    const db = await conectMongo2();
    const collection = db.collection("sumbite2");
    const result = await collection.findOne({ national_code: national_code.toString() });
    return result;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}


            getBirthCertificatePlace = async(birth_certificate_place)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({birth_certificate_place})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
              getBirthCertificateNumber = async(birth_certificate_number)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({birth_certificate_number})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                getBirthDate = async(birth_date)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({birth_date})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                  getacAdemicYear = async(academic_year)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({academic_year})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                    getEducationLevel = async(education_level)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({education_level})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                      getStudentPhone = async(student_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({student_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                        getFatherPhone = async(father_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({father_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                          getFatherJob = async(father_job)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({father_job})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
                            getMotherPhone = async(mother_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({mother_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getEmergencyPhone = async(emergency_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({emergency_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
    getMotherJob = async(mother_job)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({mother_job})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
      getGuardianName = async(guardian_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({guardian_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getGuardianRelation = async(guardian_relation)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({guardian_relation})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
    getGuardianPhone = async(guardian_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({guardian_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getPreviousSchoolName = async(previous_school_name)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({previous_school_name})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getHomeAddress = async(home_address)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({home_address})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
    getResidenceStatus = async(residence_status)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({residence_status})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getPostalCode = async(postal_code)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({postal_code})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getHomePhone = async(home_phone)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({home_phone})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  getMaritalStatus = async(marital_status)=>{
    try {
      const db = await conectMongo2()
    const collection = db.collection("sumbite2")
    const result = await collection.findOne({marital_status})
    return result
    } catch (error) {
      console.log("Error: ",error)
      return null
    }
  }
  addInfo2 = async(first_name, last_name, father_name, mother_name, national_code,
        birth_certificate_place, birth_certificate_number, birth_date,
        academic_year, education_level, student_phone, father_phone,
        father_job, mother_phone, emergency_phone, mother_job,
        guardian_name, guardian_relation, guardian_phone,
        previous_school_name, home_address, residence_status,
        postal_code, home_phone)=>{
          try {
            const db = await conectMongo2()
          const collection = db.collection("sumbite2")
          const result = await collection.insertOne({first_name, last_name, father_name, mother_name, national_code,
        birth_certificate_place, birth_certificate_number, birth_date,
        academic_year, education_level, student_phone, father_phone,
        father_job, mother_phone, emergency_phone, mother_job,
        guardian_name, guardian_relation, guardian_phone,
        previous_school_name, home_address, residence_status,
        postal_code, home_phone})
        return result
          } catch (error) {
            console.log("Error: ",error)
            return null
          }
  }
}
module.exports = new StudentModel()