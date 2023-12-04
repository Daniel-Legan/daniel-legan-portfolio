const SalaryCalculator = process.env.PUBLIC_URL + '/images/repos/SalaryCalculator.png';
const FacelessPro = process.env.PUBLIC_URL + '/images/repos/FacelessPro.png';
const NoobToMaster = process.env.PUBLIC_URL + '/images/repos/NoobToMaster.png';
const WildlifeSpotter = process.env.PUBLIC_URL + '/images/repos/WildlifeSpotter.png';
const ServerSideCalculator = process.env.PUBLIC_URL + '/images/repos/ServerSideCalculator.png';
const ToDoList = process.env.PUBLIC_URL + '/images/repos/ToDoList.png';
const CSSChallenge = process.env.PUBLIC_URL + '/images/repos/CSSChallenge.png';
const ReactGallery = process.env.PUBLIC_URL + '/images/repos/ReactGallery.png';
const ReactReduxLoop = process.env.PUBLIC_URL + '/images/repos/ReactReduxLoop.png';
const ReactMovieSagas = process.env.PUBLIC_URL + '/images/repos/ReactMovieSagas.png';

const reposData = [
    {
        id: 1,
        name: 'Wildlife Spotter (in process)',
        description: 'A full-stack web application that allows users to save animal markers on a map. Users can pan to different locations by searching for them.',
        image: WildlifeSpotter
    },
    {
        id: 2,
        name: 'Noob to Master',
        description: 'A full-stack web application facilitating connections between newcomers "noobs" and experienced players "masters" within a specific video game community. Novices can message proficient players in their vicinity, and the masters have the option to respond to these requests.',
        url: 'https://github.com/Daniel-Legan/noob_to_master',
        image: NoobToMaster
    },
    {
        id: 3,
        name: 'Faceless Pro',
        description: 'An unbiased full-stack job board application designed to eliminate hiring biases. Developed in partnership with fellow developers during my tenure at Prime Digital Academy for the local company, Faceless Pro.',
        url: 'https://github.com/Daniel-Legan/faceless-pro',
        image: FacelessPro
    },
    {
        id: 4,
        name: 'React Movie Sagas',
        description: 'A full-stack movie poster board application that provides users with detailed information about each movie upon clicking.',
        url: 'https://github.com/Daniel-Legan/weekend-movie-sagas-daniel-legan',
        image: ReactMovieSagas
    },
    {
        id: 5,
        name: 'React Gallery',
        description: 'An application enabling users to upload images, express preferences through liking/disliking, and access additional details about each image on its flipside.',
        url: 'https://github.com/Daniel-Legan/weekend-react-gallery-daniel-legan',
        image: ReactGallery
    },
    {
        id: 6,
        name: 'React Redux Survey Loop',
        description: 'A full-stack web application that allows users to complete a survey about their day and submit their responses for admin review, enabling administrators to assess user submissions.',
        url: 'https://github.com/Daniel-Legan/weekend-redux-feedback-loop-daniel-legan',
        image: ReactReduxLoop
    },
    {
        id: 7,
        name: 'CSS Facebook',
        description: 'A CSS project aimed at recreating a Facebook-like interface using simple HTML as a foundation.',
        url: 'https://github.com/Daniel-Legan/comments-css-challenge',
        image: CSSChallenge
    },
    {
        id: 8,
        name: 'To-Do List',
        description: 'A full-stack jQuery to-do list.',
        url: 'https://github.com/Daniel-Legan/weekend-sql-to-do-list-daniel-legan',
        image: ToDoList
    },
    {
        id: 9,
        name: 'Salary Calculator',
        description: 'A jQuery calculator that calculates employee monthly salary and flags the total if it exceeds a certain monetary amount.',
        url: 'https://github.com/Daniel-Legan/weekend-jquery-salary-calculator',
        image: SalaryCalculator
    },
    {
        id: 10,
        name: 'Server Side Calculator',
        description: 'A jQuery calculator that showcases user-entered calculations and displays previous entries on the DOM.',
        url: 'https://github.com/Daniel-Legan/weekend-jquery-server-calculator',
        image: ServerSideCalculator
    },
];

export default reposData;
