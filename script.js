const menu = document.getElementById('menu');
const mobileNav = document.getElementById('mobile-nav');
const eventHeading = document.getElementById('events-type');

menu.addEventListener('click', () => {
    if (Array.from(mobileNav.classList).includes('hidden')) {
        mobileNav.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
    }
});

// EVENTS

const events = [
    {
        name: 'Meeting 1',
        type: 'digital',
        date: '18 Aug 2022',
        time: '11:00 AM',
        meetingLink: 'http://google.com',
        attachmentFile: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        name: 'Meeting 2',
        type: 'digital',
        date: '20 Aug 2022',
        time: '10:00 AM',
        meetingLink: 'http://google.com',
        attachmentFile: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        name: 'Meeting 3',
        type: 'physical',
        date: '20 Aug 2022',
        time: '10:00 AM',
        location: 'Bhopal',
        attachmentFile: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        name: 'Meeting 4',
        type: 'physical',
        date: '20 Aug 2022',
        time: '10:00 AM',
        location: 'Bhopal',
        attachmentFile: 'https://www.africau.edu/images/default/sample.pdf'
    },
];


const eventsAllBtn = document.getElementById('events-all-btn');
const eventsPhysicalBtn = document.getElementById('events-physical-btn');
const eventsVitualBtn = document.getElementById('events-vitual-btn');

const eventsContainer = document.getElementById('events-container');

function getAllEvents() {
    eventHeading.textContent = "All Events";

    const physicalTemplate = getPhysicalEvents();
    const digitalTemplate = getDigitalEvents();

    const template = physicalTemplate + digitalTemplate;
    eventsContainer.innerHTML = template;
}

function getPhysicalEvents() {
    const physicalEvents = events.filter(event => event.type === 'physical');

    let physicalTemplate = '';

    physicalEvents.forEach(event => {
        const card = `
            <div class="border-2 border-teal-600 p-4 rounded">
                <h3 class="text-lg">
                    <span class="border-l-3 border-teal-600">${event.name}</span>
                </h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Location: ${event.location}</p>
                <div class="flex mt-3">
                    <a href="${event.attachmentFile}" target="_blank" class="px-3 py-1 bg-teal-600 rounded text-sm text-white">File</a>
                </div>
            </div>
        `;

        physicalTemplate += card;
    });

    return physicalTemplate
}

function getDigitalEvents() {
    const digitalEvents = events.filter(event => event.type === 'digital');

    let digitalTemplate = '';

    digitalEvents.forEach(event => {
        const card = `
            <div class="border-2 border-teal-600 p-4 rounded">
                <h3 class="text-lg">
                    <span class="border-l-3 border-teal-600">${event.name}</span>
                </h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <div class="flex mt-3">
                    <a href="${event.meetingLink}" target="_blank" class="px-3 py-1 bg-teal-600 rounded text-sm text-white mr-2">
                      Join
                    </a>
                    <a href="${event.attachmentFile}" target="_blank" class="px-3 py-1 bg-teal-600 rounded text-sm text-white">File</a>
                </div>
            </div>
        `;

        digitalTemplate += card;
    });

    return digitalTemplate
}

getAllEvents();

eventsAllBtn.addEventListener('click', () => {
    getAllEvents();
});

eventsPhysicalBtn.addEventListener('click', () => {
    eventHeading.textContent = "Physical Events";
    const physicalTemplate = getPhysicalEvents();
    eventsContainer.innerHTML = physicalTemplate;
});

eventsVitualBtn.addEventListener('click', () => {
    eventHeading.textContent = "Digital Events";
    const digitalTemplate = getDigitalEvents();
    eventsContainer.innerHTML = digitalTemplate;
});

// Gallery Slider

const modelContainer = document.getElementById('model');
const modelBtn = document.getElementById('modelBtn');
const rightSlidBtn = document.getElementById('rightSlidBtn');
const leftSlidBtn = document.getElementById('leftSlidBtn');
const sliderImage = document.querySelector('.image');
const hideBtn = document.getElementById('hide-btn');

let i = 0;
modelBtn.addEventListener('click', event => {
    modelContainer.classList.toggle('modelDisplay');
});
hideBtn.addEventListener('click', event => {
    modelContainer.classList.remove('modelDisplay');
})
const arrayOfImages = [
    "https://images.unsplash.com/photo-1665043133163-7d4ec8b428e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1662581872342-3f8e0145668f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
];

leftSlidBtn.addEventListener('click', event => {
    if (i > 0) {
        const imageUrl = arrayOfImages[--i];
        sliderImage.setAttribute("src", imageUrl);
    }
});
rightSlidBtn.addEventListener('click', event => {
    if (i < arrayOfImages.length - 1) {
        const imageUrl = arrayOfImages[++i];
        sliderImage.setAttribute("src", imageUrl);
    }
})



