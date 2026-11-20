
export interface Review {
    id: number;
    author: string;
    rating: number | null;
    text: string;
    url?: string;
    photo?: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        author: 'Miguel Angel Hernandez Iruegas',
        rating: 5,
        text: '¡Excelente lugar para comer mariscos! 🦐🐙 Todo muy rico, los productos frescos, las porciones bien servidas y la atención de primera. ¡Muy buen sazón y excelente servicio! Sin duda, un lugar al que vale la pena regresar. 100% recomendado. 👌🔥',
        url: 'https://maps.app.goo.gl/Vz2yNroH67yNjVGs8'
    },
    {
        id: 2,
        author: 'Alba Hernandez',
        rating: 5,
        text: 'Todos los cócteles preparados al momento, el aguachile de los mejores que  he comido. Recomendado al 💯, se pistea muy agusto 🍻🍺…',
        url: 'https://maps.app.goo.gl/N4VrryTdfFRfS8o48'
    },
    {
        id: 3,
        author: 'Mariana Gaytan',
        rating: 5,
        text: 'Lo recomiendo ampliamente todo lo preparan al momento, sobre todo fresco\n' +
            'Tienen desde patas de mula hasta preparados como aguachiles, ceviches , cocteles etc\n' +
            'Muy amable y atenta la señorita que atiende!!😁',
        url: 'https://maps.app.goo.gl/d9kyNdfbQGgaDHUp6'
    },
    {
        id: 4,
        author: 'Paola Ramirez',
        rating: 5,
        text: 'Super recomendado!! Todo está delicioso!, muy fresco y preparado al momento, el servicio es muy bueno te atienden rápido y muy amables siempre todos. Sin duda vuelvo a ir ❤️👍🏻',
        url: 'https://maps.app.goo.gl/uK1y3yFjYo16dRSMA'
    },
    {
        id: 5,
        author: 'Carlos Avelar',
        rating: 5,
        text: 'De los mejores mariscos que se pueden comer, cervecita y buen cotorreo, recomendable y regreso cada fin',
        url: 'https://maps.app.goo.gl/oRpQ4PUxpRLv1qdn9'
    },
    {
        id: 6,
        author: 'Ramon Edgardo Ramirez Valle',
        rating: 5,
        text: 'Es un pequeño, pero que se dedica a pura barra fria, y todo lo preparan al momento, la calidad es buena y la atención es muy buena.',
        url: 'https://maps.app.goo.gl/LQsPx7QdPpsgHnMX7'
    },
];
