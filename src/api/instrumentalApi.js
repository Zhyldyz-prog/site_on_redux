// "База данных"
const instruments = [
    {
        id: 1,
        name: "Гитара",
        type: "Струнный",
        description: "Популярный инструмент с 6 струнами",
        price: 300
    },
    {
        id: 2,
        name: "Пианино",
        type: "Клавишный",
        description: "Классический клавишный инструмент",
        price: 1200
    },
    {
        id: 3,
        name: "Скрипка",
        type: "Струнный",
        description: "Смычковый инструмент с нежным звучанием",
        price: 800
    },
    {
        id: 4,
        name: "Барабаны",
        type: "Ударный",
        description: "Основа ритма в музыке",
        price: 600
    }
];

// имитация задержки сервера
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 📃 Получить все инструменты
export const fetchInstrumentsApi = async () => {
    await delay(500);
    return instruments;
};

// 🔍 Получить один инструмент по id
export const fetchInstrumentByIdApi = async (id) => {
    await delay(300);
    return instruments.find(inst => inst.id === Number(id));
};