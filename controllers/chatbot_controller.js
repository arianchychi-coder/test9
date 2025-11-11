require("dotenv").config()
const mongoose = require("mongoose");

// اتصال به MongoDB
mongoose.connect("mongodb+srv://arianchychi_db_user:7C2JKNd5Ya2O9ocU@cluster0.jm2lop3.mongodb.net/studentsumbit?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// تعریف مدل برای جدول (کالکشن)
const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  education_level: String,
  student_phone: String,
});

const Student = mongoose.model("Student", studentSchema , "sumbite2");

const handleChatMessage = async (req, res) => {
  const userMessage = req.body.message?.toLowerCase().trim();
  if (!userMessage) return res.json({ reply: "لطفاً پیامت رو بنویس 😊" });

  try {
    // پاسخ‌های ساده
    if (userMessage.includes("سلام") || userMessage.includes("درود")) {
      return res.json({ reply: "سلام! 👋 چطور می‌تونم کمکت کنم؟" });
    }

    if (userMessage.includes("کد ملی")) {
      return res.json({ reply: "متاسفم، من نمی‌تونم اطلاعات شخصی افراد رو فاش کنم 😇" });
    }

    if (userMessage.includes("خداحافظ")) {
      return res.json({ reply: "خداحافظ! 🌸 موفق باشی." });
    }

    // اگر کاربر گفت "اطلاعات علی"
    if (userMessage.includes("اطلاعات")) {
      const name = userMessage.replace("اطلاعات", "").trim();
      if (!name) {
        return res.json({ reply: "اسم شخص رو هم بنویس 😊 مثلاً: اطلاعات علی" });
      }

      // جستجو در MongoDB با انعطاف بیشتر
      const person = await Student.findOne({
        $or: [
          { first_name: { $regex: name, $options: "i" } },
          { last_name: { $regex: name, $options: "i" } }
        ]
      });

      if (!person) {
        return res.json({ reply: `متأسفم 😕 هیچ اطلاعاتی برای "${name}" پیدا نکردم.` });
      }

      const reply = `
اطلاعات ${person.first_name} ${person.last_name}:
🎓 سطح تحصیلات: ${person.education_level || "ثبت نشده"}
📞 شماره تماس: ${person.student_phone || "ثبت نشده"}
      `;

      return res.json({ reply });
    }

    // پاسخ پیش‌فرض
    const fallbackReplies = [
      "من دقیق متوجه منظورت نشدم 🤔 می‌تونی واضح‌تر بگی؟",
      "می‌خوای برام توضیح بدی منظورت چیه؟ 😊",
      "مطمئن نیستم متوجه شدم 😅 می‌تونی یه مثال بزنی؟",
      "جالبه! بیشتر توضیح می‌دی؟ 🤓",
      "من هنوز یاد می‌گیرم! 🌱 لطفاً دوباره بپرس به یه روش دیگه."
    ];

    return res.json({
      reply: fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]
    });

  } catch (err) {
    console.error("❌ Error:", err);
    res.json({ reply: "مشکلی پیش اومد 😕 دوباره امتحان کن." });
  }
};

module.exports = { handleChatMessage };
