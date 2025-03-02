import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaPassport,
  FaUniversity,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import pdfOne from "../../files/MODULO_ISCRIZIONE_ESAMI_PLIDA - aggiornato_250222_091034.pdf";
import pdfTwo from "../../files/Prise en charge 2024.docx_20250222_101917_0000.pdf";
import pdfThree from "../../files/545458784541251 ATTE   STAT   ION DE TR  AV  AIL.pdf_20250222_105505_0000.pdf";
import pdfFour from "../../files/545458784541251 ATTE   STAT   ION DE TR  AV  AIL.pdf_20250222_105505_0000.pdf";
import zip from "../../../public/images.zip";
import logo from "../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pdfFive from "../../assets/richiesta_dichiarazione_di_valore (1)_250224_090617.pdf";
import { ArrowUp } from "lucide-react";

const ItalyStudyGuide = ({ setUser: setLocalStorageUser }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  const navigate = useNavigate();


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async function signout(id) {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/SignOut/${id}`);

      if (data.message == "تم تسجيل الخروج") {
        localStorage.removeItem("user");
        setLocalStorageUser(JSON.parse(localStorage.getItem("user")));
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  }

// إنشاء طبقة الغباش
const blurLayer = document.createElement("div");
blurLayer.style.position = "fixed";
blurLayer.style.top = "0";
blurLayer.style.left = "0";
blurLayer.style.width = "100vw";
blurLayer.style.height = "100vh";
blurLayer.style.background = "rgba(0, 0, 0, 0.5)"; // خلفية شفافة
blurLayer.style.backdropFilter = "blur(10px)"; // تأثير الغباش
blurLayer.style.zIndex = "9999";
blurLayer.style.display = "none"; // إخفاؤه افتراضيًا
document.body.appendChild(blurLayer);

// إنشاء رسالة التحذير
const warningMessage = document.createElement("div");
warningMessage.style.position = "fixed";
warningMessage.style.top = "50%";
warningMessage.style.left = "50%";
warningMessage.style.transform = "translate(-50%, -50%)";
warningMessage.style.background = "white";
warningMessage.style.padding = "20px";
warningMessage.style.borderRadius = "10px";
warningMessage.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
warningMessage.style.fontSize = "18px";
warningMessage.style.fontWeight = "bold";
warningMessage.style.textAlign = "center";
warningMessage.style.display = "none"; // إخفاؤه افتراضيًا
warningMessage.style.zIndex = "10000";
document.body.appendChild(warningMessage);

// دالة لتفعيل الغباش مع الرسالة
function showBlurMessage(message) {
  blurLayer.style.display = "block";
  warningMessage.textContent = message;
  warningMessage.style.display = "block";

  setTimeout(() => {
    blurLayer.style.display = "none";
    warningMessage.style.display = "none";
  }, 3000); // إزالة الغباش والرسالة بعد 3 ثوانٍ
}

// منع أي ضغط على الكيبورد
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  showBlurMessage("❌ غير مسموح باستخدام لوحة المفاتيح هنا!");
});

// منع النقر بزر الفأرة الأيمن
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showBlurMessage("⚠️ النقر بزر الفأرة الأيمن غير مسموح!");
});

// منع لقطة الشاشة (PrintScreen)
document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText(""); // مسح الحافظة
    e.preventDefault();
    showBlurMessage("📸 لقطة الشاشة غير مسموح بها!");
  }
});

// منع Snipping Tool (إخفاء الموقع عند فقدان التركيز)
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    document.body.style.display = "none"; // إخفاء الصفحة
  } else {
    document.body.style.display = "block";
    showBlurMessage("🔍 تم اكتشاف محاولة لقطة شاشة!");
  }
});

// منع وضع "Alt + Tab" لتبديل النوافذ
window.addEventListener("blur", function () {
  document.body.style.opacity = "0"; // تقليل الشفافية عند تبديل النوافذ
});
window.addEventListener("focus", function () {
  document.body.style.opacity = "1"; // إرجاع الشفافية عند العودة
  showBlurMessage("⚠️ تم اكتشاف تبديل النوافذ!");
});

// لمنع التفاعل مع شاشة الموبايل عبر اللمس
document.addEventListener("touchstart", function (e) {
  e.preventDefault();
  showBlurMessage("🚫 التفاعل باللمس غير مسموح به!");
});

// منع التكبير (pinch-to-zoom)
document.addEventListener("touchmove", function (e) {
  if (e.scale !== 1) {
    e.preventDefault();
    showBlurMessage("⚠️ التكبير غير مسموح به!");
  }
}, { passive: false });

// منع النقر المزدوج لتكبير الصفحة
document.addEventListener("dblclick", function (e) {
  e.preventDefault();
  showBlurMessage("🚫 النقر المزدوج غير مسموح!");
});

// منع الشريط العلوي في الأجهزة المحمولة (الذي يظهر أثناء سحب الشاشة)
document.addEventListener("touchend", function (e) {
  e.preventDefault();
});

// منع التقاط لقطة شاشة على الموبايل عبر الأدوات المدمجة
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.body.style.display = "none"; // إخفاء الموقع
  } else {
    document.body.style.display = "block";
    showBlurMessage("🔍 تم اكتشاف محاولة لقطة شاشة!");
  }
});




  return (
    <div className="w-full min-h-screen bg-gray-100   p-6">
          <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } animate-bounce`}
    >
      <ArrowUp size={24} />
    </button>
      <div className="sm:flex  items-center justify-between bg-gray-100 p-4 shadow-md">
        {/* القائمة على شكل أزرار */}
        <div className="flex text-center space-x-4">
          <button
            className="px-4 m-auto sm:m-0 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            onClick={() => signout(user._id)}
          >
            تسجيل الخروج
          </button>
          {user && user.Email === "a@a.com" && (
            <button className="px-4 m-auto py-2 bg-main hover:bg-hover text-white rounded-lg shadow transition">
              <Link to="/Dashboard" className="font-semibold text-white">
                لوحة التحكم
              </Link>
            </button>
          )}
        </div>

        <div className="flex my-9  space-x-5">
          <h1 className="text-xl font-semibold m-auto ">
            <Link to="/ItalyStudyGuide" className="text-main border-2 border-transparent border-main py-5 px-3 transition duration-200 hover:bg-main hover:text-white">
            Dossier visa
            </Link>
          </h1>
          <h1 className="text-xl font-semibold">
          <Link
  to="/FolderTwo"
  className="text-main border-2 border-transparent border-main py-5 px-3 transition duration-200 hover:bg-main hover:text-white"
>
Declaration d'impot
</Link>

          </h1>
        </div>

        {/* الشعار */}
        <img src={logo} alt="Logo" className="w-16 h-16 sm:m-0 m-auto" />
      </div>

      <div className="w-full bg-white shadow-xl rounded-lg p-8 border-t-4 border-green-500 text-right">
        <h1 className="text-3xl font-bold text-main mb-4">
          السلام عليكم ورحمة الله
        </h1>
        <p className="text-lg font-semibold text-gray-700 mb-6">
          أولاً، صلوا على محمد صلى الله عليه وسلم
        </p>

        <section className="mb-6">
          <p className="text-gray-800 leading-relaxed">
            معكم "بن عمر " تونسي ،و طالب دولي حاليا ،أقدم لكم ملخص تجربتي في
            السفر للدراسة إلى إيطاليا ، يسعدني أن توفر عليكم هذه الملفات الكثير
            من المال و الجهد . هذا العمل ليس فضاء لسب الناس لكن جل المؤسسات
            الخاصة التي تعمل في هذا الميدان(agneces) مؤسسات ربحية و يقودها أناس
            لايهمهم الطالب بقدر ما تهمهم أموالهم ،ستدفع المال و ستجد أنك مازلت
            تدفع بالرغم من أنك تقوم تقريبا بكل العمل بمفردك ،لذلك أنصحك نصيحة
            سمعتها كثيرا حينها ولكن صعب على الأمر و لم أجد من أسأل و تعددت مصادر
            المعلومة فوجدت أني أدفع أكثر من 9 مليون من أجل أشياء لم تكن لتكلف شئ
            . إن شاء الله، تجدون في هذا العمل نفعا لكم.....و لا تنسوني من صالح
            دعائكم
          </p>
        </section>

        {/* Notes Section */}
        <section className="mb-6 bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800">ملاحظة</h4>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li className="list-none">
              <p className="text-right">
                إذا وجدت معلومة وكنت على علم بأن هناك شيء يحتاج إلى تعديل،
                شاركها في المجموعة حتى تعم الفائدة على الجميع.
              </p>
              <p className="text-right">
                إذا شعرت بأن هذا العمل لم يفدك أو أنك قد دفعت في غير محلّه، فهذا
                عمل اجتهدت فيه، فإن أصبت فلي أجران، وإن أخطأت فلي أجر واحد.
              </p>
              <p className="text-right">
                هناك مجموعة واتساب تضم جميع من يهتم بهذا الأمر لتبادل المنفعة.
              </p>
              <p className="text-right">
                سيكون العمل بالعربية الفصحى لتفادي التباين بين اللهجات مع
                استخدام بعض الكلمات بالفرنسية والإيطالية.
              </p>

              <h1 className="text-right mt-4">
                البداية: أنت طالب ترغب في السفر إلى إيطاليا للدراسة، ولا تعرف من
                أين تبدأ ولا ما هي الأوراق اللازمة، ولا أي شيء عن الإجراءات
                ستحتاج إلى جمع أوراق لملفين
                <br />
                (DOSSIER VISA) ملف تأشيرة الدراسة إلى إيطاليا
                <br />
                (Dossier Bourse) ملف منحة الجامعة الإيطالية
                <br />
                كل ملف يتطلب أوراقًا ودفع رسومًا وبعض الإجراءات
              </h1>
            </li>
          </ul>
        </section>

        <section className="mb-6 p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">
              الملف الأول{" "}
            </h1>
            <p className="mt-2 text-lg">
              <span className="font-bold">(DOSSIER VISA)</span> ملف تأشيرة
              الدراسة إلى إيطاليا
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              <span className="italic">(Declaration de valeur)</span> التصريح
              بالقيمة{" "}
            </h2>
            <p className="mt-2">
              ما هي : هي ورقة قانونية تستخرجها من السفارة الإيطالية بتونس
              العاصمة ضرورية في ملف التأشيرة فهي عبارة عن تصريح من السفير
              الإيطالي أن الطالب "فلان"، وبناءً على عدد سنوات الدراسة و عدة
              معطيات أخرى، فإن شهادته توافق الشهادة الفلانية في إيطاليا
            </p>

            <h3 className="mt-4 text-md font-semibold text-orange-600">
              مراحل إنجازها والأوراق اللازمة{" "}
            </h3>
            <p className="mt-2">
              تختلف الأوراق من طالب لطالب بناءً على المستوى الدراسي الذي ترغب في
              التقديم به
            </p>

            <p className="mt-2">
              مثال توضيحي: إذا كنت طالب قانون درست سنتين فقط بعد الباكالوريا
              وترغب في تقديم{" "}
              <span className="italic">Declaration de valeur</span> بما أنك لم
              تتحصل بعد على الإجازة، فستقدم بشهادة الباكالوريا
            </p>

            <h3 className="mt-4 text-md font-semibold text-red-600">
              ما تحتاجه كل فئة من الطلبة{" "}
            </h3>

            <ul className="list-inside list-disc mt-2">
              <li className="list-none">
                <span className="font-semibold">
                  طالب سيقدم للدراسة ولديه فقط الباكالوريا
                </span>
              </li>
              <ul className=" ml-4">
                <li>شهادة الباكالوريا</li>
                <li>ورقة الأعداد</li>
              </ul>

              <li className="list-none">
                <span className="font-semibold">طالب الإجازة (Licence)</span>
              </li>
              <ul className=" ml-4">
                <li>شهادة الباكالوريا</li>
                <li>ورقة أعداد (الباكالوريا)</li>
                <li>ورقة أعداد سنة أولى إجازة</li>
                <li>ورقة أعداد سنة ثانية إجازة</li>
                <li>ورقة أعداد سنة ثالثة إجازة</li>
                <li>شهادة الإجازة</li>
              </ul>

              <li className="list-none">
                <span className="font-semibold">طلبة الماستار</span>
              </li>
              <ul className=" ml-4">
                <li>شهادة الباكالوريا</li>
                <li>ورقة أعداد (الباكالوريا)</li>
                <li>ورقة أعداد سنة أولى إجازة</li>
                <li>ورقة أعداد سنة ثانية إجازة</li>
                <li>ورقة أعداد سنة ثالثة إجازة</li>
                <li>شهادة الإجازة</li>
                <li>ورقة أعداد سنة أولى ماستار</li>
                <li>ورقة أعداد سنة ثانية ماستار</li>
                <li>شهادة الماستار</li>
              </ul>
            </ul>
          </li>

          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">
              المراحل: ما يجب فعله خطوة بخطوة{" "}
            </h1>

            <p className="mt-2">نأخذ على سبيل المثال طالب باكالوريا </p>
            <p className="mt-2">
              تقوم بأخذ شهادة الباكالوريا وورقة الأعداد، تقوم بنسخهما وتذهب إلى
              البلدية وتقوم بنسخة مطابقة للأصل لكلا الورقتين. ثم تذهب إلى أقرب
              مكتب عدل إشهاد وتقوم عنده بالمصادقة عليهما (apostille). بعد ذلك
              تذهب إلى مترجم محلف وتترجم الأوراق إلى الإيطالية، وآخر مرحلة هي أن
              تعود بهم إلى عدل الإشهاد وتقوم بالمصادقة (apostille) مرة أخرى
            </p>

            <p className="mt-2">
              وبهذه الطريقة، تكون قد أتممت الملف. بعد ذلك، تأخذ موعدًا عبر هذا
              الموقع
            </p>
            <a href="https://prenotami.esteri.it/" className="text-blue-500">
              https://prenotami.esteri.it/
            </a>

            <p className="mt-2">
              تختار خدمة{" "}
              <span className="font-semibold">(dichiarazione di valore)</span>.
              حاول أخذ أقرب موعد، وفي يوم الموعد احمل معك الأوراق في ملف ونسخة
              من جواز السفر وصورة ربما تستحقها. سوف يعطونك إيصال الدفع (Reçu)،
              وبعد أيام يتصلون بك
            </p>
            <p>
              مع ورقة مطلب خدمة <strong>Declaration de Valeur</strong>
              <a
                href={pdfFive}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                (رابط التحميل)
              </a>
              ، قم بملئها كما هو مبين في هذا الفيديو
              <a
                href="https://www.youtube.com/watch?si=rT0_en3efQeA5bOc&v=v12V2yedeaw&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                (مشاهدة الفيديو)
              </a>
              ، وأضفها مع بقية الأوراق
              <br />
              <em>
                حقيقة، نسيت بالضبط ما إن كنت قد ملأت مثل هذه الورقة، ولكن لتجنب
                أي مشاكل يوم الذهاب إلى السفارة، قوموا بطباعتها وملئها كما هو
                مبين في الفيديو
              </em>
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">ملاحظات مهمة</h2>
            <ul className=" mt-2">
              <li>
                كل طالب من الدرجات السابق ذكرها يجب عليه أن يقوم بنفس المراحل
                لكل ورقة تم ذكرها، وهذه المراحل بالترتيب
              </li>
              <ul className=" ml-4">
                <li>نسخة مطابقة للأصل (في البلدية)</li>
                <li>مصادقة (apostille) (عدل إشهاد)</li>
                <li>ترجمة للإيطالية (مترجم محلف)</li>
                <li>مصادقة (apostille) (عدل إشهاد)</li>
              </ul>

              <li className="list-none">كل ورقة ستكلف قرابة 50 دينار</li>
              <li className="list-none">
                لكن صدقني، مهما كلفك الأمر فهو لا شيء مقارنة بما ستدفعه للوكالات
                (agences). فهذه الـ 450 دينار إذا كنت طالب ماستر، فإنها لا شيء
                مقارنة بـ 8 أو 9 مليون (توكل على الله وما خاب من توكل)
              </li>
              <li className="list-none">
                بعد حصولك عليه من السفارة، انسخ نسختين، لأنك ستضع النسخة في ملف
                التأشيرة واحتفظ بالأصلية لنفسك
              </li>
              <li className="list-none">
                ملاحظة: ورقة الكفالة (prise en charge) ومضمونك الخاص يمر بنفس
                مراحل الترجمة والمصادقة لأوراق declaration de valeur
              </li>
              <li className="list-none"> B2 شهادة في اللغة الإيطالية </li>
            </ul>
          </li>

          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">
              كيف نتحصل عليها{" "}
            </h1>

            <p className="mt-2">
              بعد دراستك للغة وتمكنك منها، سواء درستها وحدك أو مع مؤسسة، تقوم
              بإجتياز واحد من الإختبارات التالية
            </p>
            <ul className=" ml-4">
              <li>CELI – Certificato di Conoscenza della Lingua Italiana</li>
              <li>CILS – Certificazione di Italiano come Lingua Straniera</li>
              <li>PLIDA – Progetto Lingua Italiana Dante Alighieri</li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              أين أجتاز هذا الإمتحان{" "}
            </h2>
            <p className="mt-2">في المركز الثقافي الإيطالي بتونس العاصمة</p>
            <p className="mt-2">
              <strong>Istituto Italiano di Cultura di Tunisi</strong>
            </p>
            <p className="mt-2">
              {" "}
              Avenue Mohamed V Tunis, Belvédère 1002, Tunisie 80 :العنوان
            </p>
            <p className="mt-2">رقم الهاتف: 71142700</p>
            <p className="mt-2">
              كيفية أخذ الموعد: نتائج البحث أظهرت لي أنه يجب الذهاب مباشرة عندهم
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              المستندات التي تحملها معك
            </h2>
            <ul className=" ml-4">
              <li>
                نسخة من بطاقة التعريف / جواز السفر{" "}
                <strong> هز نسخة من الزوز</strong>
              </li>
              <li>
                رسوم الإمتحان <strong> مبلغ قرابة 250 دينار</strong>
              </li>
              <li>صورة شخصية</li>
              <li>
                إستمارة التسجيل مملوءة
                <strong> سأترك لكم ما وجدته هنا في صيغة PDF👇</strong>
                <a href={pdfOne} download>
                  📄 تحميل الملف
                </a>
              </li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              يوم الإختبار ماذا تحمل معك
            </h2>
            <p className="mt-2">
              Prière de se présenter le jour de "l’inscription avec TOUS les
              documents nécessaires (photocopie du passeport ou certificat de
              naissance en français, 1 photo, 240 DT en espèces)
            </p>
            <p className="mt-2">
              {" "}
              هذه الفقرة من صفحتهم الخاصة و أنصحك بحمل ما قلته لك سابقًا، ربما
              تحتاج لصورة. (المبلغ قد تمت الزيادة فيه، ولاحظت أنه يزيد بمعدل 10
              دينارات كل سنة)
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">ملاحظة</h2>
            <p className="mt-2">
              Plida فيما يخص Cils و Cilly، سأترك لكم بعد المنشورات التي قد
              تنفعكم. لكن أعتقد أنها لا تختلف كثيرًا
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">ملاحظة</h2>
            <p className="mt-2">
              إذا نجحت في هذا الإمتحان، فستبدأ في تحضير بقية الأوراق، لكن في حال
              لم تنجح فيه، هناك البديل وهو
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">البديل</h2>
            <p className="mt-2">
              إمتحان من المنزل (en ligne) تقوم به مع الجامعة مباشرة
            </p>
            <p className="mt-2">
              <strong> Cisia Casa :اسم الامتحان</strong>
            </p>
          </li>

          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">تفاصيله</h1>
            <p className="mt-2">
              امتحان "Cisia Casa"، وهو اختبار قبول جامعي عبر الإنترنت تنظمه
              مؤسسة CISIA في إيطاليا. يُستخدم هذا الامتحان من قبل الجامعات
              الإيطالية لتقييم معرفة الطلاب المتقدمين للالتحاق بالبرامج الدراسية
              المختلفة
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              كيفية التسجيل
            </h2>
            <p className="mt-2">
              سأترك لكم فيديو توضيحي.{" "}
              <strong>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?si=gNuOGOCV0mDDhNxc&v=ibtmSqZDNLE&feature=youtu.be"
                >
                  (رابط الفيديو👇)
                </a>
              </strong>
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">يوم الإختبار</h2>
            <p className="mt-2">
              يُجرى الامتحان عن بُعد، مما يسمح للطلاب بأداء الامتحان من منازلهم.
              لإجراء الامتحان بنجاح، يجب على الطالب توفير ما يلي
            </p>
            <ul className=" ml-4">
              <li>جهاز حاسوب محمول (لابتوب)</li>
              <li>
                جهاز محمول إضافي (هاتف ذكي أو جهاز لوحي): مزود بكاميرا،
                لاستخدامه في عملية المراقبة عبر تطبيق ZOOM
              </li>
              <li>
                غرفة هادئة ومضاءة جيدًا: يجب أن يكون الطالب بمفرده في الغرفة
                طوال مدة الامتحان
              </li>
              <li>حاول عدم دخول أي شخص إلى الغرفة و الالتزام بكل هذه الشروط</li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              قبل يوم الامتحان
            </h2>
            <ul className=" ml-4">
              <li>تحميل وتثبيت تطبيق ZOOM على الجهاز المحمول الإضافي</li>
              <li>التأكد من عمل الأجهزة والتطبيقات بشكل صحيح</li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              في يوم الامتحان
            </h2>
            <p className="mt-2">
              يتعين على الطالب تسجيل الدخول إلى منطقة الطالب على موقع CISIA،
              واتباع التعليمات للانضمام إلى الغرفة الافتراضية وإجراء الامتحان
              تحت إشراف المراقبين
            </p>
            <p className="mt-2">
              <strong>
                التعليمات سأتركها لكم في شكل صور توضيحية.{" "}
                <a href={zip} className="text-main">
                  رابط تحميل الصور 👇
                </a>
              </strong>
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              كيف أعرف أني اجتزت هذا الإختبار
            </h2>
            <p className="mt-2">
              كل جامعة تطلب عدد معين من النقاط (مثال جامعة Firenze تطلب 33 نقطة،
              شئ من هذا القبيل، لا بد أن تحصلها، ستجد في آخر الفرض عدد النقاط
              التي تحصلت عليها). حاول البحث ومعرفة ماذا تحتاجه جامعتك وكم من
              المفروض أن تجمع من النقاط
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              المستندات التي تحتاجها
            </h2>
            <ul className="ml-4">
              <li>صورتين</li>
              <li>مضمون بالفرنسية</li>
              <li>نسخة من بطاقة التعريف الوطنية</li>
              <li>نسخة ملونة من جواز سفر صالح لمدة 15 شهر</li>
              <li>جواز سفر صالح لمدة 15 شهر</li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">لماذا</h2>
            <p className="mt-2">
              لأنك ستتركه مع الأوراق يوم تقديم ملف التأشيرة (Dossier visa) لدى
              Almaviva
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              {" "}
              Almaviva من هم{" "}
            </h2>
            <p className="mt-2">
              المؤسسة التي ستأخذ من عندهم موعدًا وتقوم بإيداع ملف التأشيرة
              لديهم.{" "}
              <strong>
                سأترك لك رابط موقعهم، وعنوانهم، وكيفية أخذ موعد معهم
              </strong>
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              (Prise en charge parental) ورقة كفالة أبوية
            </h2>
            <p className="mt-2">
              Pour fixer un rdv pour demande de visa, prière visiter le site web
              de la Société AlmavivA Visa Services{" "}
              <a href="http://www.avs.com.tn" target="_blank">
                www.avs.com.tn
              </a>{" "}
              ou prendre contact avec le numéro suivant: Tel. 00216/71103710
            </p>

            <p className="mt-2">
              📍 STATION PALESTINE METRO Ń, 2 Rue du Dr Alphonse Laveran, Tunis,
              Tunisie
            </p>

            <p className="mt-2">
              سأتركها لكم صيغة PDF جاهزة{" "}
              <strong>
                <a href={pdfTwo}>(هنا 👇)</a>
              </strong>
            </p>
            <p className="mt-2">من أين أستخرجها: من البلدية</p>
            <p className="mt-2">
              كيف أجهزها: ستقوم بملئها وتذهب أنت واللذي قام لك بالكفالة (مثال
              *الأب)، ويقوم بتأكيدها في البلدية{" "}
              <strong>(تعريف بالإمضاء)</strong>.
            </p>
          </li>

          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">ملاحظة</h1>
            <p className="mt-2">
              * ليس بالضرورة أن يكون أب أو أم، المهم أن يكون قريب لك سواء كان في
              تونس أو خارج البلد (عم، عمة، خال، خالة...) وأن تكون قادر على إثبات
              صلة القرابة بوثيقة تابعة للدولة. يمكنكم الاستفسار أكثر حول هذه
              النقطة لأنني لست متأكدًا منها كثيرًا
            </p>
            <p className="mt-2">
              * هناك وثائق تهم الذي قام لك بالكفالة (Prise en charge)، سأذكر في
              كل مرة أنها تهمه هو، التي لم أذكر أنها تهمه فهي تهمك أنت
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              بالنسبة للمتقاعدين
            </h2>
            <p className="mt-2">تلك الوثائق تهم الذي قام لك بالكفالة</p>
            <ul className=" ml-4">
              <li>Attestation de retraite (ورقة تقاعد) من CNSS</li>
              <li>
                إذا كان يتعامل مع CNRPS، يجب عليه تقديم: Attestation
                d'Affiliation و Attestation de salaire
              </li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              بالنسبة لمن هم ما يزالون يعملون
            </h2>
            <p className="mt-2">
              سواء موظفين لدى الدولة أو لدى الخصوص، أو صاحب عمل حر، مطلوب منه
            </p>
            <ul className=" ml-4">
              <li> (Attestation de travail) شهادة عمل </li>
            </ul>

            <p className="mt-2">
              من أين: يقوم الذي قام معك بالكفالة (Prise en charge) بملء شهادة
              العمل ويذهب للمشغل (الذي يعمل لحسابه) وطلب إمضائها في البلدية
            </p>
            <p className="mt-2">هذا في حال يعمل لدى الخواص</p>
            <p className="mt-2">
              في حال العمل لدى مؤسسة تابعة للدولة، يذهب لقسم الموارد البشرية في
              المؤسسة ويستخرجها
            </p>
            <p className="mt-2">
              * في حال العمل الحر (مثال صاحب حرفة أو بقالة...) يستخرج "باتيندة"
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              الوثائق الأخرى التي تهم الذي كفلك
            </h2>
            <ul className=" ml-4">
              <li>
                شهادة عمل جاهزة صيغة PDF{" "}
                <strong>
                  <a href={pdfThree}>(هنا 👇)</a>
                </strong>
              </li>
              <li>نسخة من دفتر العلاج (Copier carnet Cnam)</li>
              <li>
                وثائق الأجور (Fiche de paie 3 mois) - آخر 3 أشهر قبل يوم تسليم
                الملف للسفارة
              </li>
              <li>
                حساب بنكي مغلق(compte bloqué) يحتوي على 21 ألف دينار *في حال
                منجمتش تتحصل عليهم  تنجم تتسلفهم
              </li>
              <li>
                كشف حساب بنكي (Extrait bancaire) - لآخر 6 أشهر مع تحويلات كبيرة
                نسبيا
              </li>
              <li>تصريح بالدخل السنوي 2024 (Déclaration d'impôt) </li>
            </ul>

            <p className="mt-2">
              يجب أن يكون كشف الحساب البنكي يظهر فيه أقل المبلغ 10 مليون (و هذا
              بناءً على تجربتي)
            </p>
            <p className="mt-2">
              السبب: لأن هذا يعطي انطباع جيد للسفارة أن الكفيل قادر على كفالتك
              في حالة لم تتحصل على منحة من الجامعة
            </p>
          </li>

          <li className="list-none">
            <h1 className="text-xl font-semibold mt-4 text-main">
              من أين أستخرج هذا التصريح
            </h1>
            <p className="mt-2">_القباضة المالية</p>
            <p className="mt-2">
              عنوانها: 19 Rue Al Jazira, Tunis, Tunisie (19 نهج الجزيرة، تونس
              العاصمة)
            </p>
            <p className="mt-2">ماذا يجب أن أفعل</p>
            <ul className=" ml-4">
              <li>
                تقوم بملء الأوراق (PDF){" "}
                <strong>
                  <a href={pdfFour}>(هنا 👇)</a>
                </strong>{" "}
                بعد طباعتها ثم تذهب بها للقباضة المالية بنهج الجزيرة
              </li>
              <li>
                تطلب الختم (Cachet) ثم استلم <strong>Quitance rose</strong>.
              </li>
            </ul>
            <p className="mt-2">
              * ملاحظة: يمكنك الاستفسار إذا ما كنت تستطيع القيام بذلك في أقرب
              قباضة مالية لك، وإذا لا، فلا بد من الذهاب للقباضة في العنوان
              السابق ذكره
            </p>
            <p className="mt-2">كم ستكلف: حاول أخذ معك 100 دينار</p>

            <h2 className="mt-4 text-lg font-medium text-main">
              المرحلة الثانية
            </h2>
            <p className="mt-2">
              بعد طباعة التصريح والختم (Cachet) + Quitance rose، يجب الحصول على
              المصداقية للتصريح
            </p>
            <h3 className="mt-4 text-lg font-medium text-main">
              أين أحصل على المصداقية
            </h3>
            <p className="mt-2">
              الإدارة المالية، عنوانها: 36 Rue de Marseille, Tunis, Tunisie (36
              شارع مرسيليا، تونس العاصمة)
            </p>
            <p className="mt-2">ماذا يجب أن تفعل</p>
            <ul className=" ml-4">
              <li>
                خذ معك تمبر (Timbre) متاع 5 دينارات + التصريح، واذهب للإدارة
                المالية
              </li>
              <li>في العادة، تجدها جاهزة بعد 24 ساعة</li>
            </ul>

            <h2 className="mt-4 text-lg font-medium text-main">
              وثائق أخرى مهمة
            </h2>
            <p className="mt-2">
              <strong>ورقة ترسيم مقدم (pré-inscription)</strong>
              <br />
              كيف أقوم بها: هذه الفيديوهات ستساعدك
            </p>
            <ul className="mt-2">
              <li>
                <strong>
                  <a
                    href="https://www.youtube.com/watch?si=fnwzAGqXSL9LXjJy&v=mbrDDzyuOAs&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📺 فيديو 1
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a
                    href="https://www.youtube.com/watch?v=tSjO3422PnQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📺 فيديو 2
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a
                    href="https://www.youtube.com/watch?si=mZg6JCmeSr2uNqvf&v=dxEhfGsq4gs&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📺 فيديو 3
                  </a>
                </strong>
              </li>
            </ul>

            <p className="mt-2">
              <strong>ورقة حجز فندق:</strong> لتقليل المصاريف، أنصحك بحجز سرير
              في <em>Hostel</em>.
            </p>

            <h3 className="mt-4 text-lg font-medium text-main">
              قائمة بأماكن حجزتها في فلورنس
            </h3>
            <ul className=" ml-4">
              <li>EMERALD PALACE, Via Dell'Ariento, 2, Florence, Italie</li>
              <li>
                PLUS Florence, Via Santa Caterina D'Alessandria, 15, 50129
                Firenze FI
              </li>
            </ul>
            <p className="mt-2">هذه العناوين لمن يهمه الدراسة في فلورنس.</p>
            <p className="mt-2">
              نصائح: فلورنس هادئة وجميلة، لكنها من أصعب المدن في إيطاليا للحصول
              على سكن. أسعار المواد الغذائية والملابس غالية مقارنة مع باقي
              المدن.
            </p>
            <p className="mt-2">
              <strong>موقع حجز موثوق: </strong>
              <a href="https://www.hostelworld.com/fr/" className="text-main">
                HOSTELWORLD
              </a>
            </p>
            <p className="mt-2">
              ملاحظة: يمكنكم الاستفسار إذا ما كان الحجز في <em>Hostel</em> يؤثر
              في قبول الفيزا لكن من تجربتي، لا أعتقد أن هناك مشكلة في ذلك
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              تأمين على السفر لمدة 365 يوم
            </h2>
            <p className="mt-2">
              يوم الذهاب لتقديم الملف، سيسألونك إذا ما كنت قد قمت بالتأمين. إذا
              قلت لا، يمكنك عمل تأمين معهم بـ250 دينار
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              {" "}
              (lettre de motivation) رسالة تشجيع{" "}
            </h2>
            <p className="mt-2">
            ستجودنها جاهزة عند الإنضمام لمجموعة الواتساب <a href="https://chat.whatsapp.com/LN9ptzmqTyOBqboG4KCiWb"    target="_blank" className="hover:underline">اضغط هنا للانضمام</a>
            </p>

            <h2 className="mt-4 text-lg font-medium text-main">
              معلومات تكميلية (مهمة)
            </h2>
            <p className="mt-2">
              الأوراق التي ستترجمها إلى الإيطالية مما سبق ذكره
            </p>
            <ul className=" ml-4">
              <li> (Prise en charge) ورقة الكفالة </li>
              <li>مضمون</li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-main">
              كيف تتم عملية الترجمة
            </h3>
            <ol className=" ml-4">
              <li>نسخة مطابقة للأصل (في البلدية)</li>
              <li>مصادقة (apostille) (عدل إشهاد)</li>
              <li>ترجمة للإيطالية (مترجم محلف)</li>
              <li>مصادقة (apostille) (عدل إشهاد)</li>
            </ol>

            <p className="mt-2">
              {" "}
              (Dossier visa) هذا هو كل ما في ملف التأشيرة{" "}
            </p>
          </li>
        </section>
      </div>
    </div>
  );
};

export default ItalyStudyGuide;
