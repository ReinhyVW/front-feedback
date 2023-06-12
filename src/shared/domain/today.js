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

export const formattedToday = new Date().toLocaleDateString('en-US', options);