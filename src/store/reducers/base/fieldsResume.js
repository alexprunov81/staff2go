export default function(){
  return {
    order: [
      "titleOne",
      "name",
      "salary",
      "typeJob",
      "titleTwo",
      "ageWork",
      "companyWork",
      "titleThree",
      "education",
      "institution",
      "lang",
      "titleFour",
      "employment",
      "work_time",
      "car_exp",
      "trip"
    ],

    titleOne: {
      type:"title",
      label:"Основная информация", 
    },
    titleTwo: {
      type:"title",
      label:"Сведения о работе", 
    },
    titleThree: {
      type:"title",
      label:"Образование", 
    },
    titleFour: {
      type:"title",
      label:"Дополнительно", 
    },
    typeJob: {
      type: "list", 
      name: "typeJob", 
      label:"В какой сфере вы хотите работать?", 
      options:[
        {label: "Бар", value:"type_1"},
        {label: "Вендинг", value:"type_2"},
        {label: "Винная", value:"type_3"},
        {label: "Винодельня", value:"type_4"},
        {label: "Гостиница", value:"type_5"},
        {label: "Кейтеринг", value:"type_6"},
        {label: "Кондитерская", value:"type_7"},
        {label: "Кофейня", value:"type_8"},
        {label: "Отель", value:"type_9"},
        {label: "Пекарня", value:"type_10"},
        {label: "Вендинг", value:"type_11"},
        {label: "Пивная", value:"type_12"},
        {label: "Пищевой завод", value:"type_13"},
        {label: "Пиццерия", value:"type_14"},
        {label: "Развлечения", value:"type_15"},
        {label: "Реклама", value:"type_16"},
        {label: "Ресторан", value:"type_17"},
        {label: "Сыроварня", value:"type_18"},
        {label: "Фаст Фуд", value:"type_19"},
        {label: "Франчайзинг", value:"type_20"},
        {label: "Частная ферма", value:"type_21"},
      ]
    },
    salary: { 
      type: "multy", 
      mainname: "salary", 
      label:"Зарплата",  
      allFields: [
        { 
          type:"text", 
          name: "priceFrom",  
          placeholder: "От", 
          length: "col-4"
        },
        {
          type:"text", 
          name: "priceTo",  
          placeholder: "До", 
          length: "col-4" 
        },
        { 
          type:"select", 
          name: "priceType",  
          length: "col-4",
          placeholder:"Руб./мес.",
          options: [
            {name:"Руб./Смена", value:"type1"}, 
            {name:"Руб./Час", value:"type2"}, 
            {name:"За проект", value:"type3"}, 
          ]
        },
      ],
    },
    name:{
      type:"text", 
      name: "name",  
      placeholder: "Желаемая должность", 
      label:"Желаемая должность", 
    },
    ageWork: {
      type: "multy", 
      mainname: "ageWork", 
      label:"Стаж",  
      allFields: [
        { 
          type:"text", 
          name: "from", 
          placeholder: "Начало работы", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "to", 
          placeholder: "Окончание работы",
          length: "col-6" 
        },
      ],
    },
    companyWork: {
      type: "multy", 
      mainname: "companyWork", 
      label:"Организация",  
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование организации", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Должность",
          length: "col-6" 
        },
        { 
          type:"textarea", 
          name: "work", 
          placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
          maxLength: 500,
          length: "col-12" 
        },
      ],
    },
    education: { 
      type:"checkbox", 
      name: "typeEmployer",
      options: [
        { label: 'Среднее', value: 'type1' },
        { label: 'Неоконченное высшее', value: 'type2' },
        { label: 'Бакалавр', value: 'type3' },
        { label: 'Средне специальное', value: 'type4' },
        { label: 'Высшее', value: 'type5' },
        { label: 'Магистр', value: 'type6' },
      ] 
    },
    institution: {
      type: "multy", 
      mainname: "institution", 
      label:"Учебное заведение",  
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование учебного заведения", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Факультет",
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "special", 
          placeholder: "Специализация",
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "year", 
          placeholder: "Год окончания",
          length: "col-6" 
        },
      ],
    },
    lang: {
      type: "additional", 
      name: "lang", 
      label:"Владение языками", 
      btnTextAdd:"+ Добавить язык", 
      typeInner: "text"
    },
    employment: { 
      type:"select", 
      name: "employment", 
      label: "Занятость", 
      placeholder: "Занятость", 
      options:[
        {name: "Полная", value:"type_1"},
        {name: "Частичная", value:"type_2"},
        {name: "Волонтерство", value:"type_3"},
        {name: "Стажировка", value:"type_4"},
        {name: "Подработка", value:"type_5"},
      ]
    },
    work_time: { 
      type:"select", 
      name: "work_time", 
      label: "График работы", 
      placeholder: "График работы", 
      options:[
        {name: "Полный день", value:"type_1"},
        {name: "Сменый график", value:"type_2"},
        {name: "Гибкий график", value:"type_3"},
        {name: "Вахтовый метод", value:"type_4"},
        {name: "Удаленная работа", value:"type_5"},
      ]
    },
    car_exp: { 
      type: "select", 
      name: "car_exp", 
      label: "Опыт вождения", 
      placeholder: "Опыт вождения", 
      options:[
        {name: "A", value:"type_1"},
        {name: "B", value:"type_2"},
        {name: "C", value:"type_3"},
        {name: "D", value:"type_4"},
        {name: "E", value:"type_5"},
      ]
    },    
    trip: {
      type:"switch",
      name: "trip", 
      label: "Командировки, переезд", 
      options: [
        {name:"Готов",value:"on"},
        {name:"Не готов", value:"off"},
      ],
    },
  }
}