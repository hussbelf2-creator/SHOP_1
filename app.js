/* ==========================================================================
   FUTURE HORIZONS VOCATIONAL INSTITUTE - JAVASCRIPT APP LOGIC
   Interactive SPA Logic | Search & Filter | Modal System | No Payments
   ========================================================================== */

// Detailed Vocational & Technical Course Database
const COURSES_DATA = [
  {
    id: "tech-cyber",
    title: "دبلوم الأمن السيبراني والشبكات الذكية",
    category: "tech",
    categoryLabel: "تكنولوجيا المعلومات",
    image: "assets/images/tech.jpg",
    duration: "6 أشهر (240 ساعة)",
    level: "مبتدئ إلى متقدم",
    hoursRatio: "70% تطبيق عملي بالمختبرات",
    certification: "شهادة مهنية معتمدة + جاهزية اختبار CompTIA",
    description: "تأهيل مهني شامل لإدارة واستكشاف ثغرات الشبكات والأنظمة الرقمية، مع تدريب عملي حقيقي على اختراق الأنظمة الأخلاقي والدفاع السيبراني.",
    syllabus: [
      "أساسيات البروتوكولات والشبكات المتقدمة TCP/IP",
      "إدارة أنظمة Linux و Windows Server الأمنية",
      "أدوات الفحص والتقييم (Wireshark, Nmap, Metasploit)",
      "تأمين البنية التحتية والاستجابة للحوادث السيبرانية"
    ],
    prerequisites: "المعرفة الأساسية باستخدام الحاسوب",
    careerPaths: "محلل أمن معلومات، أخصائي شبكات، مسؤول دعم فني أمني"
  },
  {
    id: "tech-ai-dev",
    title: "مسار تطوير تطبيقات الويب والذكاء الاصطناعي",
    category: "tech",
    categoryLabel: "تكنولوجيا المعلومات",
    image: "assets/images/tech.jpg",
    duration: "8 أشهر (320 ساعة)",
    level: "جميع المستويات",
    hoursRatio: "80% مشاريع برمجية فعلية",
    certification: "شهادة مطور معتمد في المعهد",
    description: "تعلم بناء منصات الويب الحديثة باستخدام HTML5, CSS3, JavaScript وتكامل نماذج الذكاء الاصطناعي لبناء حلول تقنية مبتكرة.",
    syllabus: [
      "بناء الواجهات التفاعلية الحديثة والتصميم التكيفي",
      "منطق البرمجة وإدارة البيانات عبر JavaScript & APIs",
      "ربط نماذج الذكاء الاصطناعي في المنظومات البرمجية",
      "إدارة النسخ والمشاريع باستخدام Git & GitHub"
    ],
    prerequisites: "الرغبة في التعلم الشغوف والتفكير المنطقي",
    careerPaths: "مطور واجهات أدوية ومواقع، مطور تطبيقات الذكاء الاصطناعي"
  },
  {
    id: "health-nursing",
    title: "دبلوم التمريض المهني والرعاية الصحية الأولية",
    category: "healthcare",
    categoryLabel: "الرعاية الصحية",
    image: "assets/images/healthcare.jpg",
    duration: "12 شهر (480 ساعة)",
    level: "مكتمل التأسيس",
    hoursRatio: "65% محاكاة عيادية ومستشفيات",
    certification: "شهادة مسعف وتمريض مهني معتمد",
    description: "برنامج تدريبي تطبيقي لرفع كفاءة الكوادر التمريضية والإسعافية في القياسات الحيوية، إدارة العناية بالمرضى، والتعامل مع حالات الطوارئ.",
    syllabus: [
      "أساسيات التشريح والمصطلحات الطبية الحيوية",
      "إدارة العلامات الحيوية وتضميد الجروح المتقدم",
      "الرعاية التمريضية للمرضى والعمليات الجراحية",
      "الإسعافات الأولية المتقدمة وتنعيم الحياة CPR"
    ],
    prerequisites: "شهادة الثانوية العامة أو ما يعادلها",
    careerPaths: "مساعد تمريض، أخصائي رعاية أولية، فني طوارئ وإسعاف"
  },
  {
    id: "health-lab",
    title: "فني مختبرات وتحاليل طبية وصيدلانية",
    category: "healthcare",
    categoryLabel: "الرعاية الصحية",
    image: "assets/images/healthcare.jpg",
    duration: "6 أشهر (200 ساعة)",
    level: "متوسط",
    hoursRatio: "75% تدريب معملي مجهز",
    certification: "شهادة ممارسة مهنية في المختبرات",
    description: "إعداد كوادر صحية متخصصة في سحب العينات، إجراء الفحوصات الميكروبيولوجية، والتعامل مع الأجهزة المخبرية الحديثة بحرفية عالية.",
    syllabus: [
      "السلامة المعملية والتخلص من الفضلات البيولوجية",
      "فحوصات الدم الكيمياء الحيوية والأنسجة",
      "استخدام المجهر والأجهزة التحليلية الآلية",
      "إدارة بيانات المرضى وجودة نتائج التحاليل"
    ],
    prerequisites: "خلفية أساسية في العلوم أو التمريض",
    careerPaths: "فني مختبر، مساعد صيدلي، فني ضبط جودة عينات"
  },
  {
    id: "eng-solar",
    title: "دبلوم الطاقة الشمسية والأنظمة الكهروضوئية",
    category: "engineering",
    categoryLabel: "الهندسة والطاقة",
    image: "assets/images/engineering.jpg",
    duration: "5 أشهر (200 ساعة)",
    level: "جميع المستويات",
    hoursRatio: "85% ورش عمل ومواقع ميدانية",
    certification: "شهادة فني طاقة متجددة معتمد",
    description: "تدريب عملي متكامل على تصميم، تركيب، وصيانة محطات الطاقة الشمسية للمباني والمنشآت الكبرى مع حساب الأحمال والمحولات.",
    syllabus: [
      "مبادئ الهندسة الكهربائية والأحمال الكهروضوئية",
      "أنواع الألواح والمحولات (Inverters) والبطاريات",
      "تصميم المنظومات المرتبطة والمستقلة عن الشبكة",
      "صيانة الأعطال الفنية واختبارات الأمان الكهربائي"
    ],
    prerequisites: "المعرفة بأساسيات الكهرباء العامة",
    careerPaths: "فني تركيب أنظمة شمسية، مشرف صيانة محطات، مستشار أحمال"
  },
  {
    id: "eng-electric",
    title: "التمديدات الكهربائية الذكية ولوحات التحكم",
    category: "engineering",
    categoryLabel: "الهندسة والطاقة",
    image: "assets/images/engineering.jpg",
    duration: "6 أشهر (220 ساعة)",
    level: "مبتدئ إلى متوسط",
    hoursRatio: "80% ورش كهرباء وحساسات",
    certification: "شهادة فني كهرباء صناعية ومنازل",
    description: "اكتسب المهارة الحرفية والهندسية لتمديد وتأسيس الشبكات الكهربائية بالمباني والمنشآت وتبرمجة لوحات التحكم الذكية (PLC & Smart Automation).",
    syllabus: [
      "قراءة المخططات والخرائط الكهربائية الهندسية",
      "تأسيس لوحات التوزيع الرئيسية والحمايات",
      "الأنظمة الذكية والمستشعرات المنزلية والصناعية",
      "فحص التأريض وأمان المنشآت الصناعية"
    ],
    prerequisites: "القدرة على التعامل مع الأدوات اليدوية والكهربائية",
    careerPaths: "كهربائي صناعي ومباني، فني أتمتة منازل، مشرف تأسيس"
  },
  {
    id: "design-uiux",
    title: "دبلوم التصميم الجرافيكي واجهات UI/UX",
    category: "design",
    categoryLabel: "التصميم والإعلام",
    image: "assets/images/design.jpg",
    duration: "5 أشهر (180 ساعة)",
    level: "مبتدئ إلى متقدم",
    hoursRatio: "75% ورش تصميم حي وتطبيقات",
    certification: "شهادة مصمم جرافيكي وواجهات رقمية",
    description: "تعلم احتراف برامج التصميم العالمية، وفهم تجربة المستخدم لبناء هوية بصرية مذهلة وواجهات تطبيقات ومواقع تفاعلية.",
    syllabus: [
      "قواعد نظرية الألوان والهوية البصرية ونمذجة الشعارات",
      "التصميم باستخدام أدوات Photoshop & Illustrator",
      "هندسة تجربة المستخدم واختبار الواجهات (Figma)",
      "بناء البورتفوليو الشخصي وعرض الأعمال للعملاء"
    ],
    prerequisites: "حس فني وشغف بالتصميم البصري",
    careerPaths: "مصمم جرافيك، مصمم واجهات UI/UX، أخصائي هوية بصرية"
  },
  {
    id: "biz-admin",
    title: "إدارة الأعمال والخدمات اللوجستية المهنية",
    category: "business",
    categoryLabel: "إدارة الأعمال",
    image: "assets/images/hero.jpg",
    duration: "4 أشهر (160 ساعة)",
    level: "جميع المستويات",
    hoursRatio: "60% محاكاة شركاوية وإدارة سيناريوهات",
    certification: "شهادة كفاءة إدارية ولوجستية",
    description: "تطوير مهارات التخطيط الإداري، إدارة المستودعات وسلاسل الإمداد، وتنظيم العمليات المؤسسية بكفاءة واحترافية عالية.",
    syllabus: [
      "مبادئ الإدارة الحديثة والهياكل التنظيمية",
      "إدارة سلاسل الإمداد والتوريد والعمليات اللوجستية",
      "المكاتب الرقمية وإدارة المستندات والمراسلات",
      "إعداد التقارير المالية والإدارية وصناعة القرارات"
    ],
    prerequisites: "مهارات تواصل جيدة ورغبة بالإدارة",
    careerPaths: "مساعد إداري، منسق لوجستي، مشرف عمليات وإمداد"
  }
];

// Workshops Schedule Data
const WORKSHOPS_DATA = [
  {
    day: "15",
    month: "أكتوبر 2026",
    title: "ورشة تطبيقية: تركيب وبرمجة المحولات الشمسية الذكية",
    instructor: "م. خالد العتيبي",
    role: "خبير أنظمة الطاقة الشمسية",
    seats: "متبقي 6 مقاعد مجانية"
  },
  {
    day: "22",
    month: "أكتوبر 2026",
    title: "ورشة مكثفة: الإسعافات الأولية وإنعاش القلب CPR",
    instructor: "د. سارة المحمود",
    role: "استشارية طب الطوارئ",
    seats: "متبقي 4 مقاعد مجانية"
  },
  {
    day: "05",
    month: "نوفمبر 2026",
    title: "اختبار الاختراق الأخلاقي وفحص الثغرات الحية",
    instructor: "م. طارق الناصر",
    role: "محلل أمن سيبراني معتمد",
    seats: "متبقي 8 مقاعد مجانية"
  }
];

// State variables
let activeCategoryFilter = "all";
let searchQuery = "";

// DOM Elements Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  renderWorkshops();
  setupEventListeners();
  initCalculator();
});

// Setup All DOM Event Listeners
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileToggleBtn = document.getElementById("mobileToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeCategoryFilter = e.target.getAttribute("data-category");
      renderCourses();
    });
  });

  // Search Input
  const searchInput = document.getElementById("courseSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCourses();
    });
  }

  // Modal Close Listeners
  document.querySelectorAll(".modal-close-btn, .modal-close-trigger").forEach(btn => {
    btn.addEventListener("click", closeAllModals);
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Registration Form Submission
  const regForm = document.getElementById("enrollmentForm");
  if (regForm) {
    regForm.addEventListener("submit", handleEnrollmentSubmit);
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      const isOpen = parent.classList.contains("open");
      
      // Close all other FAQs
      document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("open"));

      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== "#" && document.querySelector(targetId)) {
        e.preventDefault();
        if (mobileMenu) mobileMenu.classList.remove("open");
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Render Courses Grid based on Filter & Search
function renderCourses() {
  const container = document.getElementById("coursesGrid");
  if (!container) return;

  const filtered = COURSES_DATA.filter(course => {
    const matchesCat = activeCategoryFilter === "all" || course.category === activeCategoryFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery) || 
                          course.description.toLowerCase().includes(searchQuery) ||
                          course.categoryLabel.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-glass); border-radius: var(--radius-lg); border: 1px dashed var(--border-glass);">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">لم يتم العثور على تخصص يطابق بحثك</h3>
        <p style="color: var(--text-muted);">جرب استخدام كلمات بحث أخرى أو اختيار قسم مختلف من الأزرار أعلاه.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => `
    <div class="glass-panel course-card">
      <div class="course-thumb">
        <img src="${course.image}" alt="${course.title}" loading="lazy">
        <span class="course-cat-badge">${course.categoryLabel}</span>
        <span class="course-cert-badge">شهادة معتمدة</span>
      </div>
      <div class="course-content">
        <div class="course-meta">
          <span class="course-meta-item"><i class="far fa-clock"></i> ${course.duration}</span>
          <span class="course-meta-item"><i class="fas fa-layer-group"></i> ${course.level}</span>
        </div>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-desc">${course.description}</p>
        <div class="course-footer">
          <span class="no-fee-tag"><i class="fas fa-check-circle"></i> طلب التحاق مباشر</span>
          <button class="btn-outline" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="openCourseDetails('${course.id}')">
            التفاصيل والتقديم <i class="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Render Practical Workshops
function renderWorkshops() {
  const container = document.getElementById("workshopsContainer");
  if (!container) return;

  container.innerHTML = WORKSHOPS_DATA.map(ws => `
    <div class="glass-panel workshop-row">
      <div class="workshop-date">
        <span class="workshop-day">${ws.day}</span>
        <span class="workshop-month">${ws.month}</span>
      </div>
      <div class="workshop-info">
        <h4>${ws.title}</h4>
        <p><i class="fas fa-users" style="color: var(--color-accent); margin-left: 0.35rem;"></i> ${ws.seats}</p>
      </div>
      <div class="workshop-instructor">
        <div class="instructor-avatar">${ws.instructor.charAt(2)}</div>
        <div>
          <h5 style="font-size: 0.9rem;">${ws.instructor}</h5>
          <p style="font-size: 0.75rem; color: var(--text-muted);">${ws.role}</p>
        </div>
      </div>
      <div class="workshop-btn-col">
        <button class="btn-accent" style="width: 100%; padding: 0.6rem 1rem; font-size: 0.85rem;" onclick="openEnrollmentModal('${ws.title}')">
          حجز مقعد مجاني
        </button>
      </div>
    </div>
  `).join("");
}

// Open Course Details Modal
function openCourseDetails(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById("courseDetailsModal");
  const modalBody = document.getElementById("courseDetailsContent");

  modalBody.innerHTML = `
    <span class="modal-header-tag">${course.categoryLabel}</span>
    <h2 class="modal-title">${course.title}</h2>
    
    <div class="modal-grid-meta">
      <div class="modal-meta-box">
        <h6>مدة البرنامج التدريبي</h6>
        <p>${course.duration}</p>
      </div>
      <div class="modal-meta-box">
        <h6>نسبة التطبيق العملي</h6>
        <p>${course.hoursRatio}</p>
      </div>
      <div class="modal-meta-box">
        <h6>المستوى والجاهزية</h6>
        <p>${course.level}</p>
      </div>
    </div>

    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--color-primary-light);">نبذة عن البرنامج:</h4>
    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.7;">${course.description}</p>

    <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--color-primary-light);">الوحدات والمخرجات التعليمية الرئيسية:</h4>
    <ul class="syllabus-list">
      ${course.syllabus.map(item => `<li class="syllabus-item"><i class="fas fa-check" style="color: var(--color-accent); margin-top: 3px;"></i> <span>${item}</span></li>`).join("")}
    </ul>

    <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(59, 130, 246, 0.08); border-radius: var(--radius-md); border: 1px solid rgba(59, 130, 246, 0.2);">
      <h5 style="font-size: 0.9rem; color: var(--color-secondary); margin-bottom: 0.35rem;"><i class="fas fa-graduation-cap"></i> الشهادة والمسارات الوظيفية:</h5>
      <p style="font-size: 0.85rem; color: var(--text-muted); mb-1"><strong>الشهادة:</strong> ${course.certification}</p>
      <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>مجالات العمل المقترحة:</strong> ${course.careerPaths}</p>
    </div>

    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: flex-end;">
      <button class="btn-outline" onclick="closeAllModals()">إغلاق</button>
      <button class="btn-primary" onclick="closeAllModals(); openEnrollmentModal('${course.title}')">
        طلب التقديم المباشر والالتحاق <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  `;

  modal.classList.add("active");
}

// Open Direct Enrollment / Inquiry Modal
function openEnrollmentModal(courseTitle = "") {
  const modal = document.getElementById("enrollmentModal");
  const courseSelect = document.getElementById("modalCourseSelect");

  if (courseSelect && courseTitle) {
    // Check if option exists or select it
    for (let i = 0; i < courseSelect.options.length; i++) {
      if (courseSelect.options[i].text.includes(courseTitle) || courseSelect.options[i].value === courseTitle) {
        courseSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Reset form status
  document.getElementById("enrollmentForm").style.display = "block";
  document.getElementById("enrollmentConfirmation").style.display = "none";
  modal.classList.add("active");
}

// Close All Active Modals
function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.classList.remove("active");
  });
}

// Handle Registration Form Submit
function handleEnrollmentSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const phone = document.getElementById("studentPhone").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const course = document.getElementById("modalCourseSelect").value;

  if (!name || !phone || !course) {
    showToast("يرجى ملء جميع الحقول المطلوبة بشكل صحيح", "warning");
    return;
  }

  // Generate Unique Application Code
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const refCode = `FH-2026-${randomNum}`;

  // Render Confirmation Receipt
  document.getElementById("enrollmentForm").style.display = "none";
  const confBox = document.getElementById("enrollmentConfirmation");
  
  confBox.innerHTML = `
    <div class="confirmation-box">
      <div class="confirmation-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #ffffff;">تم استلام طلب الالتحاق بنجاح!</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
        أهلاً بك <strong>${name}</strong>، تم ترفيق طلبك في دورة <strong>(${course})</strong> برقم مرجعي مؤكد:
      </p>
      <div class="ref-code">${refCode}</div>
      <p style="font-size: 0.85rem; color: #34d399; margin-top: 1rem;">
        <i class="fas fa-info-circle"></i> لا توجد أي رسوم أو عمليات دفع مطلوبة الآن. سيقوم قسم القبول بمراجعة طلبك والتواصل معك عبر الواتساب/الهاتف لتحديد موعد المقابلة الشخصية.
      </p>
      <div style="margin-top: 2rem;">
        <button class="btn-primary" onclick="closeAllModals()">تم، شكراً لكم</button>
      </div>
    </div>
  `;
  confBox.style.display = "block";

  showToast(`تم إرسال الطلب بنجاح. الرقم المرجعي: ${refCode}`, "success");
}

// Interactive Career Path & Hour Estimator Calculator
function initCalculator() {
  const hoursSlider = document.getElementById("calcHoursSlider");
  const hoursValue = document.getElementById("calcHoursVal");
  const sectorSelect = document.getElementById("calcSectorSelect");

  if (!hoursSlider || !hoursValue) return;

  function updateCalc() {
    const hours = parseInt(hoursSlider.value);
    hoursValue.textContent = `${hours} ساعة تدريبية`;

    // Calculation formulas for interactive response
    const weeks = Math.ceil(hours / 12);
    const practicalRatio = Math.min(85, Math.floor(60 + (hours / 10)));
    const readiness = Math.min(98, Math.floor(70 + (hours / 8)));

    document.getElementById("calcResWeeks").textContent = `${weeks} أسابيع`;
    document.getElementById("calcResPractical").textContent = `${practicalRatio}% تطبيق عملي`;
    document.getElementById("calcResReadiness").textContent = `${readiness}% جاهزية سريعة`;
  }

  hoursSlider.addEventListener("input", updateCalc);
  if (sectorSelect) sectorSelect.addEventListener("change", updateCalc);

  updateCalc();
}

// Toast Notifications System
function showToast(message, type = "info") {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fas ${type === 'warning' ? 'fa-exclamation-triangle' : 'fa-check-circle'}" style="color: var(--color-accent);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
