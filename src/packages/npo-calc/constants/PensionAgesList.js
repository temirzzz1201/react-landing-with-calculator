const PensionAgesList = [
    {
        id: 'd7891ec0-6298-408c-adbc-49968ce68757',
        title: '60 лет',
        value: 60,
    },
    {
        id: '7d923d68-28df-4e81-a992-915030fbacf3',
        title: '55 лет',
        value: 55,
    },
    {
        id: '3e6cc74b-6bcd-4056-98e8-591a74c9d891',
        title: '65 лет',
        value: 65,
    },
];

export default PensionAgesList.sort((a, b) => a.value - b.value);