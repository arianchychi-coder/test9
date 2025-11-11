const TeacherModel = require("../models/teacher_model");

const checkNationalCode = async (req, res) => {
  let { teachernationalcode } = req.body;

  // بررسی مقدار ورودی
  if (!teachernationalcode || teachernationalcode.toString().trim() === "") {
    return res.status(400).send("کد ملی الزامی است");
  }

  // اطمینان از اینکه national_code رشته است
  teachernationalcode = teachernationalcode.toString().trim();

  try {
    const student = await TeacherModel.getByNationalcode(teachernationalcode);

    if (student) {
      res.send("کد ملی معتبر است");
    } else {
      res.status(400).send("کد ملی یافت نشد");
    }
  } catch (err) {
    console.error("❌ Error checking national code:", err);
    res.status(500).send("خطا در بررسی کد ملی");
  }
};

module.exports = { checkNationalCode };
