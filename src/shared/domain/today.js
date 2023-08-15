export const today = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}).split('/').reverse().join('/');

const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};

export const todayHtml = new Date().toISOString().split('T')[0];

export const lastMonthHtml = (() => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);

    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
})();



export const formattedToday = new Date().toLocaleDateString('en-US', options);