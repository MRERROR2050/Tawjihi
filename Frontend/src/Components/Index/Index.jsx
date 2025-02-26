import React from "react";
import { FaBook, FaPassport, FaUniversity, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full bg-white shadow-xl rounded-lg p-8 border-t-4 border-blue-500 text-right">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          السلام عليكم و رحمة الله
        </h1>
        <p className="text-lg font-semibold text-gray-700 mb-6">
          أولاً، صلوا على محمد صلى الله عليه وسلم
        </p>
        
        <section className="mb-6">
          <p className="text-gray-800 leading-relaxed">
         
معكم "بن عمر "  تونسي ،و طالب دولي حاليا ،أقدم لكم ملخص تجربتي في السفر للدراسة إلى إيطاليا
 ، يسعدني أن توفر عليكم هذه الملفات الكثير من المال و الجهد . هذا العمل ليس فضاء لسب الناس لكن جل  المؤسسات الخاصة التي تعمل في هذا  الميدان(agneces) مؤسسات ربحية و يقودها أناس لايهمهم الطالب بقدر ما تهمهم أموالهم ،ستدفع المال  و ستجد أنك مازلت تدفع بالرغم من أنك تقوم تقريبا  بكل العمل بمفردك ،لذلك أنصحك نصيحة سمعتها كثيرا حينها ولكن صعب على الأمر و لم أجد من أسأل و تعددت مصادر المعلومة فوجدت أني أدفع أكثر من 9 مليون من أجل أشياء لم تكن لتكلف شئ .
إن شاء الله، تجدون في هذا العمل نفعا لكم.....و لا تنسوني من صالح دعائكم 


          </p>
        </section>

           {/* Notes Section */}
      <section className="mb-6 bg-gray-100 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800">ملاحظة</h4>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li className="list-none">إذا وجدت معلومة و عرفت من مصادرك أنها تحتوي على ما يجب تعديله، أرسلها في المجموعة و انفع معك الجميع.</li>
          <li className="list-none">من لم ينفعه هذا العمل و أحس أنه قد دفع فيما لا يلزم، فهذا العمل جهد اجتهدته، فإن أصبت فلي أجرين، و إن لم أصب فلي أجر واحد.</li>
          <li className="list-none">هناك مجموعة واتساب تضم كل من يهمه الأمر لتبادل النفع.</li>
          <li className="list-none">سيكون العمل بالعربية الفصحى لتجنب فارق اللهجة مع بعض الكلمات بالفرنسية وبعض الكلمات بالإيطالية.
البداية : أنت طالب تريد السفر إلى إيطاليا للدراسة ،لا تعرف من أين تبدأ لا تعرف ما هي الأوراق اللازمة لا تعرف أي شئ عن الأمر . 
ستحتاج لجمع أوراق ملفين : 
ملف تأشيرة الدراسة إلى إيطاليا *(DOSSIER VISA) 
ملف منحة الجامعة الإيطالية .(Dossier Bourse)
كل ملف له أوراق و دفوعات و بعض الإجراءات 
</li>
        </ul>
      </section>
        
        <section className="mb-6 p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
          <h2 className="text-xl font-bold text-blue-600 flex items-center justify-end mb-2">
            <FaPassport className="ml-2" /> ملف تأشيرة الدراسة إلى إيطاليا (Dossier VISA)
          </h2>
          <p className="text-gray-800">B2 للحصول على تأشيرة الدراسة تحتاج إلى شهادة في اللغة الإيطالية</p>
          <p className="text-gray-800">يمكنك الحصول عليها بعد اجتياز أحد الاختبارات التالية:</p>
          <ul className="list-none pr-6 text-gray-800 mt-2 text-right">
            <li className="flex items-center justify-end"> CELI – Certificato di Conoscenza della Lingua Italiana<FaCheckCircle className="ml-2 text-blue-500" /></li>
            <li className="flex items-center justify-end"> CILS – Certificazione di Italiano come Lingua Straniera<FaCheckCircle className="ml-2 text-blue-500" /></li>
            <li className="flex items-center justify-end"> PLIDA – Progetto Lingua Italiana Dante Alighieri<FaCheckCircle className="ml-2 text-blue-500" /></li>


   
      


          </ul>
          <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">اين اجتاز هذا الامتحان </h1>
  <h1> "Istituto Italiano di Cultura di Tunisi"   في المركز الثقافي الإيطالي بتونس العاصمة</h1>
  <h1> Avenue Mohamed V Tunis, Belvédère 1002, Tunisie 80     :ما هو العنوان</h1>
  <h1> رقم الهاتف: 71142700</h1>
  <div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    كيفية أخذ الموعد
  </h1>
  
  <div className=" p-4 rounded-lg shadow">
    <p className="mb-2">
      نتائج البحث أظهرت لي أنه لا بد من الذهاب مباشرة عندهم.
    </p>

    <h2 className="text-lg font-semibold text-blue-500 mb-1">
      المستندات التي تحملها معك:
    </h2>
    <ul className="list-disc pr-6 text-right">
      <li>نسخة من بطاقة التعريف / جواز السفر (يفضل أخذ نسخة من كليهما)</li>
      <li>رسوم الامتحان: مبلغ قرابة <span className="font-bold">250 دينار</span></li>
      <li>صورة شخصية</li>
      <li>استمارة التسجيل مملوءة</li>
      <li className="text-sm text-gray-600">
        * سأترك لكم ما وجدته هنا في صيغة PDF، لكن على ما أتذكر، تجدونها عندهم في أول زيارة.
      </li>
    </ul>

    <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
      يوم الاختبار، ماذا تحمل معك؟
    </h2>
    <p className=" p-3 rounded border text-gray-700">
      "Prière de se présenter le jour de l’inscription avec TOUS les documents nécessaires 
      (photocopie du passeport ou certificat de naissance en français, 1 photo, 240 DT en espèces)"
    </p>

    <p className="text-sm text-gray-600 mt-2">
      * هذه الفقرة من صفحتهم الخاصة، وأنصحك بحمل ما قلته لك سابقًا ربما تحتاج لصورة إضافية.  
      <br />
      * <span className="font-semibold">المبلغ قد تمت الزيادة فيه</span> وما لاحظته أنه يزيد بمعدل 10 دنانير لكل سنة.
    </p>
  </div>
</div>



<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    ما يخص Plida
  </h1>
  
  <p className="mb-2">
    فيما يخص <span className="font-semibold">Cils و Cilly</span>، سأترك لكم بعض المنشورات التي قد تنفعكم، لكن أعتقد أنها لا تختلف كثيرًا.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">ملاحظة:</h2>
  <p className="mb-2">
    إذا نجحت في هذا الفرض، فستبدأ في تحضير بقية الأوراق، لكن في حال لم تنجح، هناك بديل وهو:
  </p>

  <h2 className="text-lg font-semibold text-red-500 mt-4 mb-1">البديل:</h2>
  <p className="mb-2">
    امتحان من المنزل (<span className="font-semibold">En ligne</span>) تقوم به مع الجامعة مباشرة.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    اسم الامتحان:
  </h2>
  <p className="font-bold">Cisia Casa</p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    تفاصيله:
  </h2>
  <p className="mb-2">
    امتحان <span className="font-semibold">"Cisia Casa"</span>، وهو اختبار قبول جامعي عبر الإنترنت تنظمه مؤسسة <span className="font-semibold">CISIA</span> في إيطاليا. يُستخدم هذا الامتحان من قبل الجامعات الإيطالية لتقييم معرفة الطلاب المتقدمين للالتحاق بالبرامج الدراسية المختلفة.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    كيفية التسجيل:
  </h2>
  <p className="mb-2">سأترك لكم فيديو توضيحي.</p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    يوم الاختبار:
  </h2>
  <p className="mb-2">
    يُجرى الامتحان عن بُعد، مما يسمح للطلاب بأداء الامتحان من منازلهم. لإجراء الامتحان بنجاح، يجب على الطالب توفير ما يلي:
  </p>

  <ul className="list-disc pr-6 text-right">
    <li><span className="font-semibold">جهاز حاسوب محمول (لابتوب):</span></li>
    <li><span className="font-semibold">جهاز محمول إضافي (هاتف ذكي أو جهاز لوحي):</span> مزود بكاميرا، لاستخدامه في عملية المراقبة عبر تطبيق <span className="font-semibold">ZOOM</span>.</li>
    <li><span className="font-semibold">غرفة هادئة ومضاءة جيدًا:</span> يجب أن يكون الطالب بمفرده في الغرفة طوال مدة الامتحان.</li>
    <li className="text-sm text-gray-600">* حاول ألّا يدخل أحد إلى البيت والتزم بكل هذه الشروط.</li>
  </ul>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    قبل يوم الامتحان، يجب على الطالب:
  </h2>
  <ul className="list-disc pr-6 text-right">
    <li>تحميل وتثبيت تطبيق <span className="font-semibold">ZOOM</span> على الجهاز المحمول الإضافي.</li>
    <li>التأكد من عمل الأجهزة والتطبيقات بشكل صحيح.</li>
  </ul>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">
    في يوم الامتحان:
  </h2>
  <p className="mb-2">
    يتعين على الطالب تسجيل الدخول إلى منطقة الطالب على موقع <span className="font-semibold">CISIA</span>، واتباع التعليمات للانضمام إلى الغرفة الافتراضية وإجراء الامتحان تحت إشراف المراقبين.
  </p>

  <p className="text-sm text-gray-600 mt-2">
    * التعليمات سأتركها لكم في شكل صور توضيحية.
  </p>
</div>


<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    عدد النقاط المطلوبة لكل جامعة
  </h1>

  <p className="mb-2">
    كل جامعة تطلب عددًا معينًا من النقاط. <br />
    <span className="font-semibold">مثال:</span> جامعة <span className="font-semibold">Firenze</span> تطلب <span className="font-semibold">33 نقطة</span>. يجب عليك تحقيق هذا العدد من النقاط على الأقل.  
  </p>
  
  <p className="mb-2">
    ستجد في نهاية الاختبار عدد النقاط التي حصلت عليها. <br />
    <span className="font-semibold text-red-500">* حاول البحث عن متطلبات جامعتك لمعرفة عدد النقاط المطلوب منك تحقيقها.</span>
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">الوثائق المطلوبة:</h2>
  <ul className="list-disc pr-6 text-right">
    <li>صورتان شخصيتان.</li>
    <li>مضمون بالفرنسية.</li>
    <li>نسخة من بطاقة التعريف الوطنية.</li>
    <li>نسخة ملونة من جواز سفر صالح لمدة <span className="font-semibold">15 شهرًا</span>.</li>
    <li>جواز سفر صالح لمدة <span className="font-semibold">15 شهرًا</span>.</li>
  </ul>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">لماذا تحتاج جواز السفر لمدة 15 شهرًا؟</h2>
  <p className="mb-2">
    لأنك ستتركه مع الأوراق عند تقديم <span className="font-semibold">ملف التأشيرة (Dossier Visa)</span> لدى مؤسسة <span className="font-semibold">Almaviva</span>.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">من هي مؤسسة Almaviva؟</h2>
  <p className="mb-2">
    هي المؤسسة التي ستقوم من خلالها بأخذ موعد وإيداع ملف التأشيرة.  
  </p>
  <p className="text-sm text-gray-600">
    * سأترك لك رابط موقعهم، عنوانهم، وكيفية أخذ موعد معهم.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">ورقة كفالة أبوية (Prise en charge parental):</h2>
  <p className="mb-2">
    سأتركها لكم بصيغة <span className="font-semibold">PDF</span> جاهزة.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">من أين تستخرجها؟</h2>
  <p className="mb-2">
    من <span className="font-semibold">البلدية</span>.
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">كيفية تجهيزها:</h2>
  <ul className="list-disc pr-6 text-right">
    <li>قم بملئها.</li>
    <li>اذهب مع الشخص الذي قام بكفالتك (مثل <span className="font-semibold">الأب</span>).</li>
    <li>يتم تأكيدها في البلدية من خلال <span className="font-semibold">تعريف بالإمضاء</span>.</li>
  </ul>
</div>


<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    ملاحظات مهمة حول الكفالة (Prise en charge)
  </h1>

  <ul className="list-disc pr-6 text-right">
    <li>ليس بالضرورة أن يكون الكفيل <span className="font-semibold">الأب أو الأم</span>، يمكن أن يكون قريبًا مثل <span className="font-semibold">العم، العمة، الخال، الخالة...</span>.</li>
    <li>يجب إثبات صلة القرابة بوثيقة رسمية من الدولة.</li>
    <li>يمكنكم الاستفسار أكثر حول هذه النقطة للتأكد منها.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">الوثائق المطلوبة للكفيل:</h2>
  
  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">1. للمتقاعدين:</h3>
  <ul className="list-disc pr-6 text-right">
    <li><span className="font-semibold">Attestation de retraite</span> (ورقة تقاعد) من <span className="font-semibold">CNSS</span>.</li>
    <li>إذا كان يتعامل مع <span className="font-semibold">CNRPS</span>، يجب عليه استخراج:</li>
    <ul className="list-disc pr-8">
      <li><span className="font-semibold">Attestation d'Affiliation</span></li>
      <li><span className="font-semibold">Attestation de salaire</span></li>
    </ul>
  </ul>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">2. لمن هم ما زالوا يعملون:</h3>
  <ul className="list-disc pr-6 text-right">
    <li><span className="font-semibold">Attestation de travail</span> (شهادة عمل).</li>
    <li><span className="font-semibold">من أين يحصل عليها الكفيل؟</span></li>
    <ul className="list-disc pr-8">
      <li>إذا كان يعمل لدى القطاع الخاص: يملأ شهادة العمل ويأخذها إلى <span className="font-semibold">المشغل</span> ليقوم بتوقيعها ثم يصدقها في البلدية.</li>
      <li>إذا كان يعمل في مؤسسة حكومية: يستخرجها من <span className="font-semibold">قسم الموارد البشرية</span>.</li>
      <li>إذا كان يعمل لحسابه الخاص (مثل صاحب حرفة أو متجر...): يستخرج <span className="font-semibold">"باتيندة"</span>.</li>
    </ul>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">وثائق إضافية مطلوبة للكفيل:</h2>
  <ul className="list-disc pr-6 text-right">
    <li><span className="font-semibold">نسخة من دفتر العلاج (Copier carnet Cnam).</span></li>
    <li><span className="font-semibold">Fiche de paie</span> (وثائق الأجور) لآخر <span className="font-semibold">3 أشهر</span> قبل تسليم الملف للسفارة.</li>
    <li><span className="font-semibold">كشف حساب بنكي (Extrait bancaire)</span> لآخر <span className="font-semibold">6 أشهر</span>.</li>
    <ul className="list-disc pr-8">
      <li>يُفضّل أن يحتوي الحساب على تحويلات مالية منتظمة ليظهر أن الكفيل لديه دخل جيد.</li>
      <li>عند استخراج <span className="font-semibold">Extrait</span>، يجب أن يكون الرصيد الأدنى في الحساب <span className="font-semibold text-red-500">10 مليون</span> لضمان القبول.</li>
      <li>السبب: لتعزيز ثقة السفارة في قدرة الكفيل على دعمك في حال لم تتحصل على منحة.</li>
    </ul>
    <li><span className="font-semibold">تصريح بالدخل السنوي 2024 (Declaration d'impôt).</span></li>
  </ul>

  <p className="text-sm text-gray-600 mt-4">
    * جميع هذه الوثائق تهم <span className="font-semibold">الكفيل</span> فقط، ما لم يُذكر غير ذلك.
  </p>

  <p className="text-sm text-gray-600">
    * شهادة عمل جاهزة بصيغة <span className="font-semibold">PDF</span> متاحة لأصحاب العمل في القطاع الخاص.
  </p>
</div>



<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    استخراج تصريح الدخل والإجراءات المطلوبة
  </h1>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">1. استخراج التصريح من القباضة المالية</h2>

  <p className="text-right">
    يمكنك استخراج التصريح من <span className="font-semibold">القباضة المالية</span> عبر الذهاب إلى العنوان التالي:
  </p>
  <p className="text-right font-semibold text-gray-700">📍 19 نهج الجزيرة، تونس العاصمة، تونس</p>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">الخطوات المطلوبة:</h3>
  <ul className="list-disc pr-6 text-right">
    <li>قم بطباعة الأوراق المطلوبة <span className="font-semibold">(PDF)</span> واملأها بالكامل.</li>
    <li>توجّه إلى القباضة المالية المذكورة أعلاه.</li>
    <li>اطلب ختم <span className="font-semibold">(Cachet)</span> ثم استلم <span className="font-semibold">(Quitance rose)</span>.</li>
    <li>يمكنك الاستفسار إن كان بإمكانك إنجاز العملية في أقرب قباضة مالية لك.</li>
    <li>إذا لم يكن ذلك متاحًا، يجب عليك الذهاب إلى القباضة المالية في العنوان المذكور.</li>
  </ul>

  <p className="text-sm text-gray-600">💰 التكلفة المتوقعة: من الأفضل أن تحمل معك حوالي <span className="font-semibold">100 دينار</span>.</p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">2. الحصول على المصداقية للتصريح</h2>

  <p className="text-right">
    بعد استخراج التصريح وختم <span className="font-semibold">Cachet</span> واستلام <span className="font-semibold">Quitance rose</span>، يجب الحصول على <span className="font-semibold">المصداقية</span> من الإدارة المالية.
  </p>

  <p className="text-right font-semibold text-gray-700">📍 العنوان: 36 شارع مرسيليا، تونس العاصمة، تونس</p>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">الخطوات المطلوبة:</h3>
  <ul className="list-disc pr-6 text-right">
    <li>خذ معك <span className="font-semibold">Timbre</span> بقيمة <span className="font-semibold">5 دينارات</span>.</li>
    <li>أحضر معك التصريح المستخرج من القباضة المالية.</li>
    <li>قدّم الأوراق إلى الإدارة المالية وانتظر حتى يتم تجهيزها.</li>
    <li>في العادة يكون التصريح جاهزًا بعد <span className="font-semibold">24 ساعة</span>.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">3. ورقة ترسيم مقدم (Pré-inscription)</h2>

  <p className="text-right">
    لمساعدتك في إنجاز ورقة الترسيم، يمكنك مشاهدة هذا الفيديو التوضيحي:
  </p>

  <p className="text-right font-semibold text-blue-500">
    🎥 <a href="#" className="underline">اضغط هنا لمشاهدة الفيديو</a>
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">4. ورقة حجز فندق</h2>

  <p className="text-right">
    لتقليل المصاريف، يُفضَّل حجز سرير في <span className="font-semibold">Hostel</span>.
  </p>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">أماكن موصى بها في فلورنسا (Florence, Italie):</h3>
  <ul className="list-disc pr-6 text-right">
    <li><span className="font-semibold">🏨 EMERALD PALACE</span></li>
    <p className="text-right font-semibold text-gray-700">📍 Via Dell'Ariento, 2, Florence, Italie</p>
    
    <li><span className="font-semibold">🏨 PLUS Florence</span></li>
    <p className="text-right font-semibold text-gray-700">📍 Via Santa Caterina D'Alessandria, 15, 50129 Firenze FI</p>
  </ul>

  <p className="text-sm text-gray-600 mt-4">
    * هذه العناوين لمن يهمه السفر إلى فلورنسا للدراسة.
  </p>
</div>


<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    نصائح ومعلومات هامة للدراسة في فلورنسا
  </h1>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 معلومات عامة عن فلورنسا</h2>

  <ul className="list-disc pr-6 text-right">
    <li>🌆 فلورنسا مدينة هادئة وجميلة وتضم العديد من الطلبة الإيطاليين والدوليين.</li>
    <li>🏠 تُعتبر من أصعب المدن في إيطاليا للعثور على سكن.</li>
    <li>🛍️ أسعار المواد الغذائية والملابس مرتفعة مقارنة بباقي المدن الإيطالية.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 حجز السكن</h2>

  <p className="text-right">
    موقع موثوق أستخدمه دائمًا لحجز السكن هو:
  </p>
  <p className="text-right font-semibold text-blue-500">
    🔗 <a href="https://www.hostelworld.com/fr/" target="_blank" className="underline">HOSTELWORLD</a>
  </p>

  <p className="text-sm text-gray-600 mt-2">
    * يمكنك الاستفسار عمّا إذا كان الحجز في <span className="font-semibold">Hostel</span> قد يؤثر على قبول الفيزا، رغم أن الأمر لا يُشكّل عادة مشكلة.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 تأمين السفر</h2>

  <p className="text-right">
    يُطلب منك تأمين سفر لمدة <span className="font-semibold">365 يومًا</span>.
  </p>
  <p className="text-right">
    🛂 عند تقديم الملف، سيتم سؤالك إذا كنت قد قمت بالتأمين مسبقًا. إذا لم تفعل، يمكنك إجراء التأمين مباشرة مقابل <span className="font-semibold">250 دينار</span>.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 رسالة التشجيع (Lettre de motivation)</h2>

  <p className="text-right">
    يمكنك الاطلاع على أمثلة جاهزة لرسالة التشجيع هنا:
  </p>
  <p className="text-right font-semibold text-blue-500">
    📄 <a href="#" className="underline">تحميل الأمثلة</a>
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 الأوراق المطلوبة لملف التأشيرة</h2>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">📌 الأوراق التي تحتاج إلى ترجمة للإيطالية:</h3>
  <ul className="list-disc pr-6 text-right">
    <li>📄 ورقة الكفالة <span className="font-semibold">(Prise en charge)</span></li>
    <li>📜 مضمون الحالة المدنية</li>
    <li>📃 التصريح بالقيمة <span className="font-semibold">(Declaration de valeur)</span></li>
  </ul>

  <p className="text-right mt-2">
    📍 التصريح بالقيمة هو ورقة قانونية تُستخرج من السفارة الإيطالية في تونس العاصمة، ضرورية لملف التأشيرة.
  </p>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">⚙️ ما هو التصريح بالقيمة؟</h3>
  <p className="text-right">
    هو مستند رسمي يُصدره السفير الإيطالي في تونس، ويؤكد معادلة شهادتك التونسية بشهادة إيطالية معترف بها.
  </p>

  <h3 className="text-md font-semibold text-blue-500 mt-4 mb-1">📄 مراحل إنجاز التصريح والأوراق اللازمة:</h3>
  <p className="text-right">
    تختلف الأوراق المطلوبة حسب مستواك الدراسي:
  </p>
  <ul className="list-disc pr-6 text-right">
    <li>📜 إذا كنت طالب قانون ودرست سنتين بعد الباكالوريا، يجب تقديم شهادة الباكالوريا.</li>
    <li>🎓 طلبة الإجازة يُقدمون بشهادة الإجازة.</li>
    <li>📜 طلبة الماستر يُقدمون بشهادة الماستر.</li>
  </ul>

  <p className="text-sm text-gray-600 mt-4">
    * أتمنى أن يكون هذا الدليل مفيدًا لكم وأن يساعدكم في إتمام إجراءاتكم بنجاح! 😊
  </p>
</div>



<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    ما تحتاجه كل فئة من الطلبة للدراسة في إيطاليا
  </h1>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 طالب سيقدم للدراسة ولديه فقط شهادة الباكالوريا</h2>

  <ul className="list-disc pr-6 text-right">
    <li>📜 شهادة الباكالوريا</li>
    <li>📄 ورقة الأعداد</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 طالب الإجازة (Licence)</h2>

  <ul className="list-disc pr-6 text-right">
    <li>📜 شهادة الباكالوريا</li>
    <li>📄 ورقة الأعداد (الباكالوريا)</li>
    <li>📄 ورقة أعداد سنة أولى إجازة</li>
    <li>📄 ورقة أعداد سنة ثانية إجازة</li>
    <li>📄 ورقة أعداد سنة ثالثة إجازة</li>
    <li>🎓 شهادة الإجازة</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 طلبة الماستار</h2>

  <ul className="list-disc pr-6 text-right">
    <li>📜 شهادة الباكالوريا</li>
    <li>📄 ورقة الأعداد (الباكالوريا)</li>
    <li>📄 ورقة أعداد سنة أولى إجازة</li>
    <li>📄 ورقة أعداد سنة ثانية إجازة</li>
    <li>📄 ورقة أعداد سنة ثالثة إجازة</li>
    <li>🎓 شهادة الإجازة</li>
    <li>📄 ورقة الأعداد سنة أولى ماستار</li>
    <li>📄 ورقة الأعداد سنة ثانية ماستار</li>
    <li>🎓 شهادة الماستار</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 المراحل: ما يجب فعله خطوة بخطوة (مثال: طالب باكالوريا)</h2>

  <ol className="list-decimal pl-6 text-right">
    <li>📄 قم بأخذ شهادة الباكالوريا وورقة الأعداد، ثم قم بنسخهما.</li>
    <li>🏢 اذهب إلى البلدية وقم بنسخ الشهادات المطابقة للأصل.</li>
    <li>✍️ توجه إلى أقرب مكتب عدل إشهاد وقم بالمصادقة على الأوراق (apostille).</li>
    <li>📚 بعد ذلك، اذهب إلى مترجم محلف لترجمة الأوراق إلى اللغة الإيطالية.</li>
    <li>📝 في المرحلة الأخيرة، قم بإعادة الأوراق إلى مكتب عدل الإشهاد للمصادقة (apostille) مرة أخرى.</li>
  </ol>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 الموعد النهائي</h2>

  <p className="text-right">
    بعد إتمام كافة الإجراءات، يمكنك أخذ موعد عبر الموقع التالي:
  </p>
  <p className="text-right font-semibold text-blue-500">
    🔗 <a href="https://prenotami.esteri.it/" target="_blank" className="underline">حجز موعد عبر موقع السفارة الإيطالية</a>
  </p>

  <p className="text-right">
    📅 حاول حجز أقرب موعد ممكن، وفي يوم الموعد، تأكد من حملك معك الأوراق في ملف، ونسخة من جواز السفر (ربما تحتاج إليها).
  </p>

  <p className="text-right">
    📑 سيعطونك إيصال الدفع (Reçu)، وبعد عدة أيام سيتم الاتصال بك.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <p className="text-right mt-4 text-sm text-gray-600">
    * أرجو أن يكون هذا الدليل مفيدًا وأن يساعدك في إتمام إجراءاتك بنجاح! 😊
  </p>
</div>



<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    ملاحظات مهمة على الإجراءات المطلوبة
  </h1>

  <p className="text-right text-lg mt-4">
    🔹 **كل طالب من الدرجات السابقة يجب عليه أن يتبع نفس المراحل لكل ورقة تم ذكرها:**
  </p>

  <ol className="list-decimal pl-6 text-right">
    <li>📄 <strong>نسخة مطابقة للأصل:</strong> يجب الحصول عليها من البلدية.</li>
    <li>✍️ <strong>المصادقة (apostille):</strong> يتم في مكتب عدل الإشهاد.</li>
    <li>📚 <strong>الترجمة للإيطالية:</strong> بواسطة مترجم محلف.</li>
    <li>🖋️ <strong>المصادقة (apostille) مرة ثانية:</strong> في مكتب عدل الإشهاد.</li>
  </ol>

  <p className="text-right mt-4">
    💰 **تكلفة كل ورقة:** تقريبا 50 دينار لكل ورقة.
  </p>

  <p className="text-right mt-4 text-lg font-semibold">
    **ملاحظة:** 
  </p>

  <p className="text-right">
    صدقني، مهما كانت تكلفة الإجراءات فهي لا شيء مقارنة بما ستدفعه للوكالات (agences). فإذا كنت طالب ماستار، فهذه الـ450 دينار لا شيء مقابل 8 أو 9 مليون! 💪
    <br />
    توكل على الله وما خاب من توكل. 🙏
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 بعد حصولك على الوثائق من السفارة:</h2>

  <ul className="list-disc pr-6 text-right">
    <li>📝 **انسخ النسخة مرتين:** واحدة تضعها في ملف الفيزا، والأخرى للاحتفاظ بها الأصلية لنفسك.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 ورقة الكفالة (prise en charge) ومضمونك الخاص:</h2>

  <p className="text-right">
    هذه الورقة تمر بنفس المراحل التي تم ذكرها أعلاه.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    ملف التأشيرة (Dossier visa) 
  </h2>

  <p className="text-right text-lg mt-4">
    📄 **الوثائق المطلوبة:**
  </p>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 ملف المنحة الدراسية (Dossier bourse):</h2>

  <p className="text-right mt-4">
    🔹 **تصريح بالدخل السنوي 2023 (Declaration d'impot):** خاص بالشخص الذي قام بالكفالة.
  </p>

  <p className="text-right mt-4">
    ⬇️ **من أين تستخرج هذا التصريح؟**
  </p>

  <ul className="list-disc pr-6 text-right">
    <li>🏢 **القباضة المالية:**
      <br />
      📍 العنوان: 19 Rue Al Jazira, Tunis, Tunisie (19 نهج الجزيرة، تونس العاصمة)
    </li>
  </ul>

  <p className="text-right mt-4">
    🔹 **ماذا يجب أن تفعل؟**
  </p>

  <ul className="list-disc pr-6 text-right">
    <li>📋 قم بملء الأوراق بصيغة *PDF بعد طباعتها.</li>
    <li>🏢 توجه إلى القباضة المالية في العنوان المذكور واطلب "Cachet" (ختم) و"Quitance rose" (الإيصال الوردي).</li>
    <li>💰 التكلفة التقريبية: 100 دينار.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 المرحلة الثانية: الحصول على المصداقية للتصريح:</h2>

  <p className="text-right mt-4">
    🔹 **أين تحصل على المصداقية؟**
  </p>

  <ul className="list-disc pr-6 text-right">
    <li>🏢 **الإدارة المالية:**
      <br />
      📍 العنوان: 36 Rue de Marseille, Tunis, Tunisie (36 شارع مرسيليا، تونس العاصمة)
    </li>
  </ul>

  <p className="text-right mt-4">
    بعد طباعة التصريح و"Cachet" + "Quitance rose"، توجه للإدارة المالية للحصول على المصداقية.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <p className="text-right mt-4 text-sm text-gray-600">
    * إذا كنت بحاجة إلى المزيد من المساعدة في الإجراءات أو أي تفاصيل إضافية، لا تتردد في التواصل! 😊
  </p>
</div>



<div className="my-4">
  <h1 className="text-xl font-bold text-blue-600 flex items-center justify-end my-2">
    الإجراءات اللازمة للحصول على الأوراق المطلوبة للمنحة الدراسية
  </h1>

  <p className="text-right text-lg mt-4">
    🔹 **عنوان الإدارة المالية:**
  </p>

  <ul className="list-disc pr-6 text-right">
    <li>🏢 **العنوان:** 36 Rue de Marseille, Tunis, Tunisie (36 شارع مرسيليا، تونس العاصمة)</li>
  </ul>

  <p className="text-right mt-4">
    🔹 **ماذا يجب أن تفعل؟**
  </p>

  <ul className="list-disc pr-6 text-right">
    <li>📑 تأخذ معك تمبري (Timbre) قيمته 5 دينارات بالإضافة إلى التصريح.</li>
    <li>🏢 تذهب إلى الإدارة المالية في العنوان المذكور.</li>
    <li>⌛ في العادة، يمكنك الحصول على المصداقية بعد 24 ساعة.</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 ورقة مطلب المنحة:</h2>
  <p className="text-right">
    📄 **الرابط الخاص بورقة مطلب المنحة (بإمكانك تحميلها من الرابط التالي):** 
    <br />
    [رابط ورقة مطلب المنحة](#)
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 شهادة عدم ملكية:</h2>

  <p className="text-right">
    📜 **ما هي شهادة عدم الملكية؟** هي ورقة تثبت أن الوالدين ليس لهما ملكية في الولاية التي تسكن فيها.
  </p>

  <p className="text-right mt-4">
    🔹 **كيف تحصل عليها؟**
  </p>

  <ul className="list-decimal pl-6 text-right">
    <li>إذا كان الوالدان لا يملكان عقاراً في الولاية، قم بزيارة مصلحة "الملكية العقارية" واطلب شهادة عدم ملكية لكل منهما.</li>
    <li>إذا كان لكل منهما عقار في ولاية مختلفة عن ولايتك، قم بزيارة إدارة الملكية العقارية في الولاية التي يملكان فيها العقار، وقدم الطلب.</li>
    <li>⏳ عادةً، سيقومون بالاتصال بك بعد خمسة أيام على أقصى تقدير.</li>
    <li>✨ **تأكد من استخراج الشهادة لكلا الوالدين.**</li>
  </ul>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 مضمون حياة جماعية "Certificat de vie collective":</h2>

  <p className="text-right">
    🏢 **من أين تحصل عليها؟** قم بزيارة البلدية في منطقتك للحصول على هذه الشهادة.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <h2 className="text-lg font-semibold text-blue-500 mt-4 mb-1">🔹 نسخة من جواز السفر:</h2>

  <p className="text-right">
    تأكد من تضمين نسخة من جواز السفر في ملف المنحة الدراسية.
  </p>

  <div className="border-t border-gray-300 my-4"></div>

  <p className="text-right mt-4 text-sm text-gray-600">
    * إذا كنت بحاجة إلى المزيد من المساعدة في الإجراءات أو أي تفاصيل إضافية، لا تتردد في التواصل! 😊
  </p>
</div>



        </section>




        
      

<section>
<div className="w-full max-w-full p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">السلام عليكم ورحمة الله</h1>
        <p className="mt-4 text-lg text-gray-700">أولاً، صلوا على محمد صلى الله عليه وسلم</p>
      </header>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">معكم "بن عمر" تونسي، و طالب دولي حالياً</h2>
        <p className="mt-2 text-gray-600">
          أقدم لكم ملخص تجربتي في السفر للدراسة إلى إيطاليا، يسعدني أن توفر عليكم هذه الملفات الكثير من المال و الجهد.
        </p>
      </section>

      {/* Experience Summary */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">التجربة</h3>
        <p className="mt-2 text-gray-600">
          هذا العمل ليس فضاء لسب الناس لكن جل المؤسسات الخاصة التي تعمل في هذا الميدان (Agencies) مؤسسات ربحية...
        </p>
        <p className="mt-2 text-gray-600">
          ستدفع المال و ستجد أنك مازلت تدفع بالرغم من أنك تقوم تقريبا بكل العمل بمفردك، لذلك أنصحك نصيحة سمعتها...
        </p>
      </section>

      {/* Notes Section */}
      <section className="mb-6 bg-gray-100 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800">ملاحظة</h4>
        <ul className="list-disc pl-6 mt-2 text-gray-600">
          <li>إذا وجدت معلومة و عرفت من مصادرك أنها تحتوي على ما يجب تعديله، أرسلها في المجموعة و انفع معك الجميع.</li>
          <li>من لم ينفعه هذا العمل و أحس أنه قد دفع فيما لا يلزم، فهذا العمل جهد اجتهدته، فإن أصبت فلي أجرين، و إن لم أصب فلي أجر واحد.</li>
          <li>هناك مجموعة واتساب تضم كل من يهمه الأمر لتبادل النفع.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h5 className="text-lg font-semibold text-gray-800">البداية</h5>
        <p className="mt-2 text-gray-600">
          أنت طالب تريد السفر إلى إيطاليا للدراسة، لا تعرف من أين تبدأ لا تعرف ما هي الأوراق اللازمة لا تعرف أي شيء عن الأمر.
        </p>
      </section>

      {/* Files Needed */}
      <section>
        <h6 className="text-lg font-semibold text-gray-800">ستحتاج لجمع أوراق ملفين:</h6>
        <ul className="list-decimal pl-6 mt-2 text-gray-600 ml-auto">
          <li>ملف تأشيرة الدراسة إلى إيطاليا *(DOSSIER VISA)</li>
          <li>ملف منحة الجامعة الإيطالية *(Dossier Bourse)</li>
        </ul>
        <p className="mt-2 text-gray-600">
          كل ملف له أوراق و دفوعات و بعض الإجراءات.
        </p>
      </section>
    </div>
</section>


<section className="w-full max-w-full p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">الملف الأول : تأشيرة الدراسة إلى إيطاليا *(DOSSIER VISA)</h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">(Declaration de valeur) التصريح بالقيمة</h3>
      <p className="text-gray-600 mb-4">
        هي ورقة قانونية تستخرجها من السفارة الإيطالية بتونس العاصمة ضرورية في ملف التأشيرة. فهي عبارة عن تصريح من السفير الإيطالي أن الطالب "فلان"، وبناءً على عدد سنوات الدراسة وعدة معطيات أخرى، فإن شهادته توافق الشهادة الفلانية في إيطاليا.
      </p>

      <h4 className="text-lg font-semibold text-gray-800 mb-2">مراحل إنجازها و الأوراق اللازمة:</h4>
      <p className="text-gray-600 mb-4">
        تختلف الأوراق من طالب لطالب بناءً على المستوى الدراسي الذي يرغب الطالب في التقديم له.
      </p>

      {/* Example for different student levels */}
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-gray-800">مثال توضيحي:</h5>
        <p className="text-gray-600 mb-2">أنت طالب قانون و درست سنتين فقط بعد الباكالوريا وترغب في تقديم التصريح بالقيمة (Declaration de valeur). بما أنك لم تتحصل بعد على الإجازة، فإنك ستقدم بشهادة الباكالوريا.</p>
        <p className="text-gray-600 mb-2">طلبة الإجازة يقدمون بشهادة الإجازة.</p>
        <p className="text-gray-600 mb-2">طلبة الماستار يقدمون بشهادة الماستار.</p>
      </div>

      {/* Sections for each category */}
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-gray-800">ما يحتاجه كل فئة من الطلبة:</h5>

        {/* Baccalaureate students */}
        <div className="mb-4">
          <h6 className="font-semibold text-gray-800">طالب سيقدم للدراسة و لديه فقط الباكالوريا سيحتاج:</h6>
          <ul className="list-disc pl-6 text-gray-600">
            <li>شهادة الباكالوريا</li>
            <li>ورقة الأعداد</li>
          </ul>
        </div>

        {/* Bachelor's degree students */}
        <div className="mb-4">
          <h6 className="font-semibold text-gray-800">طالب الإجازة (Licence) يحتاج:</h6>
          <ul className="list-disc pl-6 text-gray-600">
            <li>شهادة الباكالوريا</li>
            <li>ورقة أعداد (الباكالوريا)</li>
            <li>ورقة أعداد سنة أولى إجازة</li>
            <li>ورقة أعداد سنة ثانية إجازة</li>
            <li>ورقة أعداد سنة ثالثة إجازة</li>
            <li>شهادة الإجازة</li>
          </ul>
        </div>

        {/* Master's degree students */}
        <div className="mb-4">
          <h6 className="font-semibold text-gray-800">طلبة الماستار يحتاجون:</h6>
          <ul className="list-disc pl-6 text-gray-600">
            <li>شهادة الباكالوريا</li>
            <li>ورقة أعداد (الباكالوريا)</li>
            <li>ورقة أعداد سنة أولى إجازة</li>
            <li>ورقة أعداد سنة ثانية إجازة</li>
            <li>ورقة أعداد سنة ثالثة إجازة</li>
            <li>شهادة الإجازة</li>
            <li>ورقة الأعداد سنة أولى ماستار</li>
            <li>ورقة الأعداد سنة ثانية ماستار</li>
            <li>شهادة الماستار</li>
          </ul>
        </div>
      </div>

      {/* Step-by-step process */}
      <h4 className="text-lg font-semibold text-gray-800 mb-2">المراحل: ما يجب فعله خطوة بخطوة</h4>
      <p className="text-gray-600 mb-4">
        نأخذ على سبيل المثال طالب باكالوريا: تقوم بأخذ شهادة الباكالوريا وورقة الأعداد وتقوم بنسخهما وتذهب إلى البلدية وتقوم بنسخة مطابقة للأصل لكلا الورقتين، ثم تذهب إلى أقرب مكتب عدل إشهاد وتقوم عنده بالمصادقة عليهما (apostille).
      </p>
      <p className="text-gray-600 mb-4">
        ثم تذهب إلى مترجم محلف و تترجم الأوراق إلى الإيطالية. وأخيرًا، تعود بهم إلى عدل الإشهاد وتقوم بالمصادقة (apostille) مرة أخرى.
      </p>
      <p className="text-gray-600 mb-4">
        بعد إتمام هذه المراحل، يمكنك أخذ موعد عبر الموقع: <a href="https://prenotami.esteri.it/" className="text-blue-500 underline">https://prenotami.esteri.it/</a>
      </p>

      <h5 className="text-lg font-semibold text-gray-800 mb-2">ملاحظات مهمة:</h5>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>كل طالب من الدرجات السابقة يجب عليه أن يقوم بنفس المراحل لكل ورقة تم ذكرها.</li>
        <li>الأوراق المطلوبة تشمل: نسخة مطابقة للأصل، مصادقة (apostille)، ترجمة للإيطالية، مصادقة (apostille) ثانية.</li>
        <li>كل ورقة ستكلف قرابة 50 دينار.</li>
      </ul>

      <p className="text-gray-600">
        صدقني، مهما كلفك الأمر فهو لا شيء أمام ما ستدفعه للوكالات (agences).
      </p>

      {/* New section added */}
      <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">معلومات إضافية:</h4>
      <p className="text-gray-600 mb-4">
        فهذه ال450 دينار إذا كنت طالب ماستار فإنها لا شيء أمام 8 أو 9 مليون (توكل على الله وما خاب من توكل).
      </p>
      <p className="text-gray-600 mb-4">
        بعد حصولك على الوثيقة من السفارة، أنسخ نسختين، حيث ستضع النسخة في ملف التأشيرة واحتفظ بالأصلية لنفسك.
      </p>
      <p className="text-gray-600 mb-4">
        ملاحظة: ورقة الكفالة (prise en charge) ومضمونك الخاص يمران بنفس مراحل الترجمة والمصادقة لأوراق التصريح بالقيمة (Declaration de valeur).
      </p>

      <h5 className="text-lg font-semibold text-gray-800 mb-2">شهادة في اللغة الإيطالية B2</h5>
      <p className="text-gray-600 mb-4">
        بعد دراستك للغة الإيطالية وتمكنك منها، سواء درستها وحدك أو مع مؤسسة، يمكنك اجتياز واحد من الاختبارات التالية:
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>CELI – Certificato di Conoscenza della Lingua Italiana</li>
        <li>CILS – Certificazione di Italiano come Lingua Straniera</li>
        <li>PLIDA – Progetto Lingua Italiana Dante Alighieri</li>
      </ul>

      <h5 className="text-lg font-semibold text-gray-800 mb-2">أين أجتاز هذا الامتحان:</h5>
      <p className="text-gray-600 mb-4">
        في المركز الثقافي الإيطالي بتونس العاصمة: 
        <br />
        "Istituto Italiano di Cultura di Tunisi"
      </p>
      <p className="text-gray-600 mb-4">
        العنوان: 80 Avenue Mohamed V Tunis, Belvédère 1002, Tunisie
        <br />
        رقم الهاتف: 71142700
      </p>
      <h5 className="text-lg font-semibold text-gray-800 mb-2">كيفية أخذ الموعد:</h5>
      <p className="text-gray-600 mb-4">
        نتائج البحث أظهرت لي أنه يجب عليك الذهاب مباشرة إلى المركز لأخذ الموعد.
      </p>
    </section>



    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-700 border-r-4 border-gray-600 pr-4 mb-6">المستندات المطلوبة للتأشيرة</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">المستندات التي يجب حملها معك:</h2>
        <ul className="list-disc list-inside">
          <li>نسخة من بطاقة التعريف الوطنية / جواز السفر - يجب إحضار نسختين</li>
          <li>رسوم الإمتحان - المبلغ قرابة 250 دينار</li>
          <li>صورة شخصية</li>
          <li>إستمارة التسجيل مملوءة</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">يوم الإختبار:</h2>
        <p>يجب الحضور بالوثائق التالية:</p>
        <ul className="list-disc list-inside">
          <li>نسخة من جواز السفر أو شهادة ميلاد باللغة الفرنسية</li>
          <li>صورة شخصية</li>
          <li>مبلغ 240 دينار نقدًا</li>
          <li>جواز سفر صالح لمدة 15 شهراً</li>
        </ul>
        <p className="mt-4 font-bold">ملاحظة:</p>
        <p>يتعين عليك حمل جميع المستندات السابقة في يوم التقديم في حال لم يتم تقديمها مسبقًا.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">البديل في حال الفشل في الاختبار:</h2>
        <p>يمكنك التقديم لامتحان "Cisia Casa" عبر الإنترنت، والذي يجرى من منزلك عبر تطبيق ZOOM. إليك التفاصيل:</p>
        <ul className="list-disc list-inside">
          <li>جهاز حاسوب محمول (لابتوب)</li>
          <li>جهاز محمول إضافي (هاتف ذكي أو جهاز لوحي) مزود بكاميرا</li>
          <li>غرفة هادئة ومضاءة جيدًا</li>
          <li>تحميل تطبيق ZOOM على الأجهزة</li>
        </ul>
        <p className="mt-4 font-bold">كيفية التسجيل:</p>
        <p>رابط الفيديو التوضيحي (👇).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">المستندات الإضافية المطلوبة للتأشيرة:</h2>
        <ul className="list-disc list-inside">
          <li>نسخة من بطاقة التعريف الوطنية</li>
          <li>نسخة ملونة من جواز السفر صالح لمدة 15 شهرًا.</li>
          <li>ورقة كفالة أبوية (Prise en charge parental)</li>
        </ul>
        <p className="mt-4">وثائق إضافية للكفيل:</p>
        <ul className="list-disc list-inside">
          <li>إذا كان الكفيل موظفًا، يجب عليه تقديم شهادة العمل.</li>
          <li>كشف حساب بنكي لآخر 6 أشهر مع تحويلات مالية جيدة.</li>
          <li>تصريح بالدخل السنوي من القباضة المالية.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ترجمة المستندات إلى الإيطالية:</h2>
        <p>يجب ترجمة الوثائق الرئيسية إلى اللغة الإيطالية، واتباع المراحل التالية:</p>
        <ol className="list-decimal list-inside">
          <li>نسخة مطابقة للأصل.</li>
          <li>مصادقة (apostille).</li>
          <li>ترجمة بواسطة مترجم محلف.</li>
          <li>مصادقة (apostille) مرة أخرى.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">نصائح للسكن:</h2>
        <p>يمكنك حجز سرير في Hostel لتقليل المصاريف. أماكن موصى بها:</p>
        <ul className="list-disc list-inside">
          <li>Emerald Palace، PLUS Florence في فلورنس.</li>
        </ul>
        <p className="mt-4">موقع حجز أستخدمه كثيرًا وموثوق: <a href="https://www.hostelworld.com/fr/" className="text-blue-500">HOSTELWORLD</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">تأمين السفر:</h2>
        <p>يمكنك الحصول على تأمين سفر لمدة 365 يومًا بمبلغ 250 دينار في يوم تقديم الملف.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">رسالة تشجيع (lettre de motivation):</h2>
        <p>سأترك لكم أمثلة جاهزة هنا (رابط PDF 👇).</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">معلومات تكميلية:</h2>
        <p>الأوراق التي ستترجمها بالإيطالية مما سبق ذكره:</p>
        <ul className="list-disc list-inside">
          <li>ورقة الكفالة (Prise en charge)</li>
          <li>مضمون</li>
        </ul>
        <p className="mt-4">كيفية الترجمة:</p>
        <ol className="list-decimal list-inside">
          <li>نسخة مطابقة للأصل.</li>
          <li>مصادقة (apostille).</li>
          <li>ترجمة بواسطة مترجم محلف.</li>
          <li>مصادقة (apostille) مرة أخرى.</li>
        </ol>
      </section>

    </div>



      </div>
    </div>
  );
};

export default Index;
