// Car data for modals (BMW, Tesla, Toyota, Mercedes, Defender, Audi, Porsche)
const carData = {
    x5: {
        name: "BMW X5",
        description: "Luxury midsize SUV with advanced technology and comfort.",
        specs: {
            engine: "3.0L 6-cylinder",
            horsepower: "335 hp",
            mileage: "21 MPG",
            type: "SUV"
        },
        images: ["images/bmw-x5.jpg", "images/bmw-x5-2.jpg"],
        price: "$60,000"
    },
    m3: {
        name: "BMW M3",
        description: "High-performance sports sedan with dynamic handling.",
        specs: {
            engine: "3.0L Twin-Turbo",
            horsepower: "473 hp",
            mileage: "19 MPG",
            type: "Sedan"
        },
        images: ["images/bmw-m3.jpg", "images/bmw-m3-2.jpg"],
        price: "$70,000"
    },
    models: {
        name: "Tesla Model S",
        description: "Electric sedan with unmatched acceleration.",
        specs: {
            engine: "Dual Electric Motors",
            horsepower: "670 hp",
            mileage: "405 miles range",
            type: "Sedan"
        },
        images: ["images/tesla-model-s.jpg", "images/tesla-model-s-2.jpg"],
        price: "$89,990"
    },
    modely: {
        name: "Tesla Model Y",
        description: "Versatile electric SUV with advanced features.",
        specs: {
            engine: "Dual Electric Motors",
            horsepower: "456 hp",
            mileage: "330 miles range",
            type: "SUV"
        },
        images: ["images/tesla-model-y.jpg", "images/tesla-model-y-2.jpg"],
        price: "$65,990"
    },
    camry: {
        name: "Toyota Camry",
        description: "Reliable midsize sedan with modern styling.",
        specs: {
            engine: "2.5L 4-cylinder",
            horsepower: "203 hp",
            mileage: "28 MPG",
            type: "Sedan"
        },
        images: ["images/toyota-camry.jpg", "images/toyota-camry-2.jpg"],
        price: "$35,000"
    },
    corolla: {
        name: "Toyota Corolla",
        description: "Compact sedan with excellent fuel efficiency.",
        specs: {
            engine: "1.8L 4-cylinder",
            horsepower: "139 hp",
            mileage: "31 MPG",
            type: "Sedan"
        },
        images: ["images/toyota-corolla.jpg", "images/toyota-corolla-2.jpg"],
        price: "$25,000"
    },
    cclass: {
        name: "Mercedes C-Class",
        description: "Premium compact sedan with elegant design and luxury.",
        specs: {
            engine: "2.0L 4-cylinder Turbo",
            horsepower: "255 hp",
            mileage: "25 MPG",
            type: "Sedan"
        },
        images: ["images/mercedes-cclass.jpg", "images/mercedes-cclass-2.jpg"],
        price: "$45,000"
    },
    gle: {
        name: "Mercedes GLE",
        description: "Luxury midsize SUV with advanced safety features.",
        specs: {
            engine: "3.0L 6-cylinder Turbo",
            horsepower: "362 hp",
            mileage: "22 MPG",
            type: "SUV"
        },
        images: ["images/mercedes-gle.jpg", "images/mercedes-gle-2.jpg"],
        price: "$62,000"
    },
    defender90: {
        name: "Defender 90",
        description: "Compact off-road SUV with rugged versatility.",
        specs: {
            engine: "2.0L 4-cylinder Turbo",
            horsepower: "296 hp",
            mileage: "18 MPG",
            type: "SUV"
        },
        images: ["images/defender-90.jpg", "images/defender-90-2.jpg"],
        price: "$55,000"
    },
    defender110: {
        name: "Defender 110",
        description: "Spacious off-road SUV with advanced capability.",
        specs: {
            engine: "3.0L 6-cylinder Turbo",
            horsepower: "395 hp",
            mileage: "17 MPG",
            type: "SUV"
        },
        images: ["images/defender-110.jpg", "images/defender-110-2.jpg"],
        price: "$65,000"
    },
    a4: {
        name: "Audi A4",
        description: "Premium compact sedan with sleek design and technology.",
        specs: {
            engine: "2.0L 4-cylinder Turbo",
            horsepower: "201 hp",
            mileage: "27 MPG",
            type: "Sedan"
        },
        images: ["images/audi-a4.jpg", "images/audi-a4-2.jpg"],
        price: "$42,000"
    },
    q5: {
        name: "Audi Q5",
        description: "Versatile luxury SUV with advanced features.",
        specs: {
            engine: "2.0L 4-cylinder Turbo",
            horsepower: "261 hp",
            mileage: "24 MPG",
            type: "SUV"
        },
        images: ["images/audi-q5.jpg", "images/audi-q5-2.jpg"],
        price: "$53,000"
    },
    911: {
        name: "Porsche 911",
        description: "Iconic sports car with timeless performance.",
        specs: {
            engine: "3.0L Twin-Turbo 6-cylinder",
            horsepower: "379 hp",
            mileage: "20 MPG",
            type: "Sports Car"
        },
        images: ["images/porsche-911.jpg", "images/porsche-911-2.jpg"],
        price: "$101,200"
    },
    cayenne: {
        name: "Porsche Cayenne",
        description: "Luxury SUV with dynamic driving experience.",
        specs: {
            engine: "3.0L V6 Turbo",
            horsepower: "335 hp",
            mileage: "21 MPG",
            type: "SUV"
        },
        images: ["images/porsche-cayenne.jpg", "images/porsche-cayenne-2.jpg"],
        price: "$79,200"
    }
};

// Open modal with car details
function openModal(modelId) {
    const car = carData[modelId];
    if (!car) return;

    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modal-data");

    modalData.innerHTML = `
        <h2>${car.name}</h2>
        <div class="gallery">
            ${car.images.map(img => `<img src="${img}" alt="${car.name}" onclick="openLightbox('${img}')">`).join("")}
        </div>
        <p>${car.description}</p>
        <ul>
            <li><strong>Engine:</strong> ${car.specs.engine}</li>
            <li><strong>Horsepower:</strong> ${car.specs.horsepower}</li>
            <li><strong>Mileage:</strong> ${car.specs.mileage}</li>
            <li><strong>Type:</strong> ${car.specs.type}</li>
        </ul>
        <p><strong>Price:</strong> ${car.price}</p>
        <a href="#" class="cta">Learn More</a>
    `;

    modal.style.display = "flex";
}

// Close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Lightbox for image zoom
function openLightbox(imageSrc) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img src="${imageSrc}" alt="Car Image">`;
    lightbox.onclick = () => lightbox.remove();
    document.body.appendChild(lightbox);
    lightbox.style.display = "flex";
}

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll(".model-card");
            cards.forEach(card => {
                const model = card.dataset.model;
                card.style.display = carData[model].name.toLowerCase().includes(query) ? "block" : "none";
            });
        });
    }
});