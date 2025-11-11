const StudentModel = require("../models/sumbite_model");

const checkNationalCode = async (req, res) => {
  let { national_code } = req.body;

  // بررسی مقدار ورودی
  if (!national_code || national_code.toString().trim() === "") {
    return res.status(400).send("کد ملی الزامی است");
  }
  // اطمینان از اینکه national_code رشته است
  national_code = national_code.toString().trim();

  try {
    const student = await StudentModel.getNationalcode(national_code);

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
