import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  ru: {
    translation: {
      meta: {
        title_home: 'Бирюков Николай Михайлович — Бизнес-консалтинг',
        title_services: 'Услуги — Бирюков Консалтинг',
        title_portfolio: 'Портфолио — Бирюков Консалтинг',
        title_about: 'Обо мне — Бирюков Консалтинг',
        title_contacts: 'Контакты — Бирюков Консалтинг',
        title_catalog: 'Каталог — Бирюков Консалтинг'
      },
      logo: 'BConsult',
      nav: {
        services: 'Услуги',
        portfolio: 'Портфолио',
        about: 'Обо мне',
        contacts: 'Контакты',
        cta: 'Оставить заявку'
      },
      hero: {
        name: 'Бизнес-консалтинг и стратегическое развитие',
        subtitle: 'помощь с открытием бизнеса и дальнейшим сопровождением',
        cta_primary: 'Обсудить проект',
        cta_secondary: 'Услуги'
      },
      services: {
        title: 'Услуги',
        lead: 'Комплексная поддержка бизнеса на каждом этапе',
        items: [
          { title: 'Стратегический консалтинг', desc: 'Разработка стратегий роста, трансформация бизнес-моделей, планирование.' },
          { title: 'Финансовый анализ', desc: 'Аудит финансовых потоков, управление капиталом, инвестиционное планирование.' },
          { title: 'Операционное совершенствование', desc: 'Оптимизация процессов, снижение издержек, повышение эффективности.' },
          { title: 'Управленческий учёт', desc: 'Внедрение систем контроля, KPI, управленческая отчётность.' }
        ]
      },
      catalog: {
        title: 'Каталог услуг',
        lead: 'Выберите направление — мы подберём решение под задачи вашего бизнеса.',
        cta: 'Обсудить проект',
        services: {
          strategy: {
            title: 'Стратегический консалтинг',
            shortDesc: 'Разработка стратегии роста и оптимизация бизнес-процессов.',
            fullDesc: 'Комплексный аудит текущего состояния бизнеса, анализ рынка и конкурентов, разработка дорожной карты развития на 3–5 лет. Помогаем найти точки роста и снизить операционные издержки.',
            tags: ['Аудит', 'Стратегия', 'ROI'],
            price: 'от 150 000 ₽'
          },
          marketing: {
            title: 'Маркетинг и брендинг',
            shortDesc: 'Создание узнаваемого бренда и увеличение продаж.',
            fullDesc: 'Позиционирование бренда, разработка фирменного стиля, digital-стратегия, SEO, контекстная реклама и SMM. Комплексный подход к привлечению клиентов.',
            tags: ['SMM', 'SEO', 'Брендинг'],
            price: 'от 80 000 ₽'
          },
          finance: {
            title: 'Финансовый консалтинг',
            shortDesc: 'Оптимизация налогов и управление финансами.',
            fullDesc: 'Финансовое моделирование, бюджетирование, управление денежными потоками, налоговая оптимизация и подготовка к инвестиционным раундам.',
            tags: ['Налоги', 'Бюджет', 'M&A'],
            price: 'от 100 000 ₽'
          },
          hr: {
            title: 'HR-консалтинг',
            shortDesc: 'Подбор, обучение и мотивация команды.',
            fullDesc: 'Построение системы подбора персонала, разработка KPI и системы мотивации, корпоративная культура, оценка и развитие ключевых сотрудников.',
            tags: ['Подбор', 'KPI', 'Обучение'],
            price: 'от 70 000 ₽'
          },
          digital: {
            title: 'Цифровая трансформация',
            shortDesc: 'Внедрение IT-решений и автоматизация.',
            fullDesc: 'Аудит IT-инфраструктуры, внедрение CRM и ERP-систем, автоматизация рутинных процессов, разработка технических заданий для digital-продуктов.',
            tags: ['CRM', 'ERP', 'Автоматизация'],
            price: 'от 120 000 ₽'
          },
          legal: {
            title: 'Юридическая поддержка',
            shortDesc: 'Сопровождение сделок и защита бизнеса.',
            fullDesc: 'Юридический аудит, договорная работа, корпоративное право, защита интеллектуальной собственности, представительство в арбитражных судах.',
            tags: ['Договоры', 'IP', 'Суды'],
            price: 'от 50 000 ₽'
          }
        }
      },
      portfolio: {
        title: 'Портфолио',
        lead: 'Реализованные проекты и кейсы',
        items: [
          { title: 'Проект «Альфа»', desc: 'Стратегия выхода на новый рынок для производственной компании.' },
          { title: 'Проект «Бета»', desc: 'Оптимизация операционных издержек на 30% в ритейле.' },
          { title: 'Проект «Гамма»', desc: 'Внедрение управленческого учёта для среднего бизнеса.' }
        ]
      },
      about: {
        title: 'Обо мне',
        photo_alt: 'Фото специалиста',
        photo_placeholder: '[Фото специалиста]',
        p1: 'Бирюков Николай Михайлович — независимый бизнес-консультант с многолетним опытом работы с компаниями разного масштаба.',
        p2: 'Специализация: стратегическое планирование, финансовый анализ, операционное совершенствование и управленческий учёт.',
        p3: 'Цель — помочь бизнесу расти устойчиво и прибыльно.'
      },
      faq: {
        title: 'Часто задаваемые вопросы',
        lead: 'Ответы на популярные вопросы',
        items: [
          { q: 'Какие компании вы консультируете?', a: 'Работаю с малым и средним бизнесом, а также с крупными компаниями в сферах производства, ритейла и IT.' },
          { q: 'Сколько длится типовый проект?', a: 'В среднем от 4 до 12 недель в зависимости от масштаба и сложности задач.' },
          { q: 'Как начать сотрудничество?', a: 'Напишите на email или позвоните — мы обсудим задачу и согласуем формат работы.' },
          { q: 'Работаете ли вы дистанционно?', a: 'Да, консультации и часть проектов провожу онлайн. При необходимости выезжаю на объект.' }
        ]
      },
      contacts: {
        title: 'Контакты',
        lead: 'Свяжитесь для консультации',
        email_label: 'Email',
        phone_label: 'Телефон',
        address_label: 'Адрес',
        address_value: 'Санкт-Петербург, Россия',
        telegram_label: 'Telegram'
      },
      roadmap: {
        tag1: 'Стратегия',
        tag2: 'Аудит',
        tag3: 'Рост',
        title: 'Консалтинг для роста бизнеса',
        subtitle: 'Стратегический аудит + управленческий консалтинг',
        desc: 'Комплексная диагностика бизнес-процессов, выявление узких мест и разработка плана масштабирования. Работаем с компаниями от стартапов до среднего бизнеса.',
        meta_region: 'География',
        meta_region_val: 'Россия, СНГ'
      },
      credentials: {
        stat1: 'лет опыта',
        stat2: 'проектов',
        stat3: 'рост прибыли',
        heading: 'Почему выбирают меня',
        feat1: 'MBA, Высшая школа менеджмента',
        feat2: 'PMP-сертификация',
        feat3: 'Опыт работы в Big 4',
        feat4: 'Эксперт Forbes и РБК',
        feat5: '80% клиентов возвращаются'
      },
      form: {
        title: 'Оставить заявку',
        name: 'Имя',
        name_placeholder: 'Ваше имя',
        phone: 'Телефон',
        phone_placeholder: '+7 (___) ___-__-__',
        email: 'Email',
        email_placeholder: 'email@example.com',
        service: 'Услуга',
        service_placeholder: 'Выберите услугу',
        service_list: [
          'Стратегический консалтинг',
          'Маркетинг и брендинг',
          'Финансовый консалтинг',
          'HR-консалтинг',
          'Цифровая трансформация',
          'Юридическая поддержка'
        ],
        message: 'Сообщение',
        message_placeholder: 'Расскажите о задаче...',
        submit: 'Отправить заявку',
        success_title: 'Заявка отправлена!',
        success_text: 'Мы свяжемся с вами в ближайшее время.',
        error_name: 'Введите имя',
        error_phone: 'Введите телефон',
        error_service: 'Выберите услугу'
      },
      footer: {
        desc: 'Консалтинговые услуги для развития вашего бизнеса.',
        nav_title: 'Навигация',
        contact_title: 'Контакты',
        copy: '© 2026 Bconsult. Все права защищены.'
      }
    }
  },
  en: {
    translation: {
      meta: {
        title_home: 'Nikolay Biryukov — Business Consulting',
        title_services: 'Services — Biryukov Consulting',
        title_portfolio: 'Portfolio — Biryukov Consulting',
        title_about: 'About — Biryukov Consulting',
        title_contacts: 'Contacts — Biryukov Consulting',
        title_catalog: 'Catalog — Biryukov Consulting'
      },
      logo: 'BConsult',
      nav: {
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contacts: 'Contacts',
        cta: 'Request a quote'
      },
      hero: {
        name: 'Business Consulting & Strategic Development',
        subtitle: 'business starting assistance and further support',
        cta_primary: 'Discuss a project',
        cta_secondary: 'Services'
      },
      services: {
        title: 'Services',
        lead: 'Comprehensive business support at every stage',
        items: [
          { title: 'Strategic Consulting', desc: 'Growth strategy development, business model transformation, planning.' },
          { title: 'Financial Analysis', desc: 'Financial flow audit, capital management, investment planning.' },
          { title: 'Operational Excellence', desc: 'Process optimization, cost reduction, efficiency improvement.' },
          { title: 'Management Accounting', desc: 'Implementation of control systems, KPIs, management reporting.' }
        ]
      },
      catalog: {
        title: 'Service Catalog',
        lead: 'Choose a direction — we will tailor a solution for your business needs.',
        cta: 'Discuss a project',
        services: {
          strategy: {
            title: 'Strategic Consulting',
            shortDesc: 'Growth strategy development and business process optimization.',
            fullDesc: 'Comprehensive audit of current business state, market and competitor analysis, development of a 3–5 year roadmap. We help find growth points and reduce operational costs.',
            tags: ['Audit', 'Strategy', 'ROI'],
            price: 'from 150,000 ₽'
          },
          marketing: {
            title: 'Marketing & Branding',
            shortDesc: 'Building brand awareness and increasing sales.',
            fullDesc: 'Brand positioning, corporate identity development, digital strategy, SEO, contextual advertising and SMM. A comprehensive approach to customer acquisition.',
            tags: ['SMM', 'SEO', 'Branding'],
            price: 'from 80,000 ₽'
          },
          finance: {
            title: 'Financial Consulting',
            shortDesc: 'Tax optimization and financial management.',
            fullDesc: 'Financial modeling, budgeting, cash flow management, tax optimization and preparation for investment rounds.',
            tags: ['Taxes', 'Budget', 'M&A'],
            price: 'from 100,000 ₽'
          },
          hr: {
            title: 'HR Consulting',
            shortDesc: 'Recruitment, training and team motivation.',
            fullDesc: 'Building a recruitment system, developing KPIs and motivation systems, corporate culture, assessment and development of key employees.',
            tags: ['Recruitment', 'KPI', 'Training'],
            price: 'from 70,000 ₽'
          },
          digital: {
            title: 'Digital Transformation',
            shortDesc: 'IT solutions implementation and automation.',
            fullDesc: 'IT infrastructure audit, CRM and ERP system implementation, automation of routine processes, technical specifications for digital products.',
            tags: ['CRM', 'ERP', 'Automation'],
            price: 'from 120,000 ₽'
          },
          legal: {
            title: 'Legal Support',
            shortDesc: 'Transaction support and business protection.',
            fullDesc: 'Legal audit, contract work, corporate law, intellectual property protection, representation in arbitration courts.',
            tags: ['Contracts', 'IP', 'Courts'],
            price: 'from 50,000 ₽'
          }
        }
      },
      portfolio: {
        title: 'Portfolio',
        lead: 'Completed projects and cases',
        items: [
          { title: 'Project Alpha', desc: 'Market entry strategy for a manufacturing company.' },
          { title: 'Project Beta', desc: '30% operational cost reduction in retail.' },
          { title: 'Project Gamma', desc: 'Management accounting implementation for a mid-sized business.' }
        ]
      },
      about: {
        title: 'About',
        photo_alt: 'Consultant photo',
        photo_placeholder: '[Photo of the consultant]',
        p1: 'Nikolay Mikhailovich Biryukov is an independent business consultant with years of experience working with companies of various scales.',
        p2: 'Specializations: strategic planning, financial analysis, operational excellence, and management accounting.',
        p3: 'Mission — to help businesses grow sustainably and profitably.'
      },
      faq: {
        title: 'Frequently Asked Questions',
        lead: 'Answers to common questions',
        items: [
          { q: 'What companies do you consult?', a: 'I work with small and medium-sized businesses, as well as large companies in manufacturing, retail, and IT.' },
          { q: 'How long does a typical project take?', a: 'On average, 4 to 12 weeks depending on the scale and complexity of the tasks.' },
          { q: 'How do I start working with you?', a: 'Send an email or call — we will discuss the task and agree on the format of work.' },
          { q: 'Do you work remotely?', a: 'Yes, consultations and some projects are conducted online. On-site visits are available when necessary.' }
        ]
      },
      contacts: {
        title: 'Contacts',
        lead: 'Get in touch for a consultation',
        email_label: 'Email',
        phone_label: 'Phone',
        address_label: 'Address',
        address_value: 'Saint Petersburg, Russia',
        telegram_label: 'Telegram'
      },
      roadmap: {
        tag1: 'Strategy',
        tag2: 'Audit',
        tag3: 'Growth',
        title: 'Consulting for Business Growth',
        subtitle: 'Strategic audit + management consulting',
        desc: 'Comprehensive diagnostics of business processes, identifying bottlenecks and developing a scaling plan. We work with companies from startups to mid-sized businesses.',
        meta_region: 'Region',
        meta_region_val: 'Russia, CIS'
      },
      credentials: {
        stat1: 'years of experience',
        stat2: 'projects',
        stat3: 'profit growth',
        heading: 'Why choose me',
        feat1: 'MBA, Graduate School of Management',
        feat2: 'PMP Certification',
        feat3: 'Big 4 experience',
        feat4: 'Forbes and RBC expert',
        feat5: '80% clients return'
      },
      form: {
        title: 'Request a quote',
        name: 'Name',
        name_placeholder: 'Your name',
        phone: 'Phone',
        phone_placeholder: '+1 (___) ___-__-__',
        email: 'Email',
        email_placeholder: 'email@example.com',
        service: 'Service',
        service_placeholder: 'Select a service',
        service_list: [
          'Strategic Consulting',
          'Marketing & Branding',
          'Financial Consulting',
          'HR Consulting',
          'Digital Transformation',
          'Legal Support'
        ],
        message: 'Message',
        message_placeholder: 'Tell us about your project...',
        submit: 'Submit request',
        success_title: 'Request sent!',
        success_text: 'We will contact you shortly.',
        error_name: 'Enter your name',
        error_phone: 'Enter your phone',
        error_service: 'Select a service'
      },
      footer: {
        desc: 'Business consulting for growth and development.',
        nav_title: 'Navigation',
        contact_title: 'Contacts',
        copy: '© 2026 Bconsult. All rights reserved.'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
