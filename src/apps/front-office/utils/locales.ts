import { extend, groupedTranslations } from '@mongez/localization';
import { arTranslation, enTranslation } from '@mongez/validator';

extend('en', enTranslation);
extend('ar', arTranslation);

// Add only common localization
groupedTranslations({
  appName: {
    ar: process.env.REACT_APP_NAME as string,
  },
  loading: {
    en: 'Loading...',
    ar: 'جار التحميل...',
  },
  home: {
    en: 'Home',
    ar: 'الرئيسية',
  },
  login: {
    en: 'Login',
    ar: 'تسجيل الدخول',
  },
  pleaseFillLoginData: {
    en: 'Please fill login data',
    ar: 'نرجو من سيادتكم ملئ البيانات لتسجيل الدخول',
  },
  pleaseFillRegisterData: {
    en: 'Please fill login data',
    ar: 'نرجو من سيادتكم ملئ البيانات لتسجيل الدخول',
  },
  name: {
    en: 'Name',
    ar: 'الاسم',
  },
  confirmPassword: {
    en: 'Confirm Password',
    ar: 'تأكيد كلمة المرور',
  },
  association: {
    en: 'Association',
    ar: 'الجمعية',
  },
  phoneNumber: {
    en: 'Phone Number',
    ar: 'رقم الهاتف',
  },
  thanksForRegistration: {
    en: 'Thanks for registration',
    ar: 'شكرا لتسجيلكم, سيتم مراجعة الحساب من قبل الادارة لكي يتم تفعيله.',
  },
  youHaveAccount: {
    en: 'You have account?',
    ar: 'لديك حساب بالفعل؟',
  },
  projects: {
    en: 'Projects',
    ar: 'المشاريع',
  },
  initiatives: {
    en: 'Initiatives',
    ar: 'المبادرات',
  },
  agreements: {
    en: 'Agreements',
    ar: 'اتفاقيات الشراكة',
  },
  latestNews: {
    en: 'Latest News',
    ar: 'اخر الأخبار',
  },
  joinNow: {
    en: 'Join Now',
    ar: 'انضم الآن',
  },
  welcomeLogin: {
    en: 'Welcome to login page',
    ar: 'مرحبا بك, تسجيل الدخول',
  },
  somethingWentWrong: {
    en: 'Something Went wrong, please try again later.',
    ar: 'حدث خطأ ما, من فضلك حاول مرة أخرى في وقت لاحق.',
  },
  welcomeBack: {
    en: 'Welcome back %s',
    ar: 'مرحبا بك مجددا %s',
  },
  welcomeRegister: {
    en: 'Welcome to register page',
    ar: 'مرحبا بك, تسجيل جديد',
  },
  email: {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  password: {
    en: 'Password',
    ar: 'كلمة السر',
  },
  errorHeading: {
    en: 'Error!',
    ar: 'خطأ!',
  },
  categories: {
    en: 'categories',
    ar: 'الأقسام',
  },
  aboutUs: {
    en: 'about us',
    ar: 'من نحن',
  },
  conditionsPage: {
    en: 'conditions ',
    ar: ' الشروط والاحكام',
  },
  privacy: {
    en: 'privacy',
    ar: 'سياسة الخصوصيه ',
  },
  contactUS: {
    en: 'contact uS',
    ar: 'اتصل بنا',
  },
  serviceProvider: {
    en: 'service provider',
    ar: 'مقدم خدمه',
  },
  accessDenied: {
    en: 'Access Denied!',
    ar: 'غير مصرح لك بدخول هذه الصفحة!',
  },
  notFoundPage: {
    en: 'Not Found Page',
    ar: 'الصفحة المطلوبة غير موجودة',
  },
  careers: {
    ar: 'الوظائف',
    en: 'Careers',
  },
  whyStudio: {
    ar: 'لماذا تختار منصة استوديو؟',
    en: 'Why choose Studio platform?',
  },
  choseUs1: {
    ar: 'عدد كبير من المكاتب المختلفة والعروض المميزة المناسبة لك',
    en: 'A large number of different offices And special offers suitable for you',
  },
  choseUs2: {
    ar: 'انظمة دفع مختلفة وامـنـــة كلياً لتتناسب مع طريقة دفعك',
    en: 'Different and completely secure payment systems To match your payment method',
  },
  choseUs3: {
    ar: 'مكاتب معتمدة وموثقة ومختبرة من قبل لضمان الجودة والامان',
    en: 'Accredited, documented and tested offices By to ensure quality and safety',
  },
  doProjectsRemotely: {
    ar: 'قم بمشاريعك عن بُعد',
    en: 'do your Projects Remotely',
  },
  askEasly: {
    ar: 'اطلب بسهولة الخدمات الھندسیة من المكاتب المعتمدة الاحترافية    ',
    en: 'Easily order engineering services from professional authorized offices ',
  },
  askAny: {
    ar: 'اطلب ما تريدة من الخدمات الهندسية من خلال مكاتب مختلفة واحترافية ومعتمدة وقم بمشروعك عن بُعد بأمان وبسهولة تامة    ',
    en: 'Order what you want from engineering services through different and professional offices And certified and do your project remotely safely and easily',
  },
  back: {
    ar: 'الرجوع',
    en: 'Back',
  },
  phone: {
    ar: 'رقم الجوال',
    en: 'Phone Number',
  },
  attachments: {
    ar: 'إرفاق ملحقات PDF/JPG/PNG',
    en: 'Attach PDF/JPG/PNG attachments',
  },
  skills: {
    ar: 'الخبرات/المهارات',
    en: 'Experience/Skills',
  },
  submit: {
    ar: 'تقديم',
    en: 'Submit',
  },
});
