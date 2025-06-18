export const featuredCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 28999,
    images: ["/1.png"],
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 15000,
    color: "White",
    wishlisted: false,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 26499,
    images: ["/2.webp"],
    transmission: "Manual",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    mileage: 12000,
    color: "Blue",
    wishlisted: true,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 42999,
    images: ["/3.jpg"],
    transmission: "Automatic",
    fuelType: "Electric",
    bodyType: "Sedan",
    mileage: 8000,
    color: "Red",
    wishlisted: false,
  },
];

export const carMakes = [
  { id: 1, name: "Hyundai", image: "/make/hyundai.webp" },
  { id: 2, name: "Honda", image: "/make/honda.webp" },
  { id: 3, name: "BMW", image: "/make/bmw.webp" },
  { id: 4, name: "Tata", image: "/make/tata.webp" },
  { id: 5, name: "Mahindra", image: "/make/mahindra.webp" },
  { id: 6, name: "Ford", image: "/make/ford.webp" },
];

export const bodyTypes = [
  { id: 1, name: "SUV", image: "/body/suv.webp" },
  { id: 2, name: "Sedan", image: "/body/sedan.webp" },
  { id: 3, name: "Hatchback", image: "/body/hatchback.webp" },
  { id: 4, name: "Conversível", image: "/body/convertible.webp" },
];

export const faqItems = [
  {
  question: "Como funciona o agendamento de test drive?",
  answer:
    "Basta encontrar o carro que você tem interesse, clicar no botão 'Test Drive' e escolher um horário disponível. Nosso sistema confirmará o agendamento e enviará todos os detalhes necessários.",
},
{
  question: "Posso buscar carros usando uma imagem?",
  answer:
    "Sim! Nossa busca por imagem com inteligência artificial permite que você envie a foto de um carro que gostou, e encontraremos modelos semelhantes em nosso estoque.",
},
{
  question: "Todos os carros são certificados e verificados?",
  answer:
    "Todos os veículos anunciados em nossa plataforma passam por um processo de verificação. Trabalhamos apenas com concessionárias confiáveis e vendedores particulares verificados.",
},
{
  question: "O que acontece após eu agendar um test drive?",
  answer:
    "Após o agendamento, você receberá um e-mail de confirmação com todos os detalhes. Também entraremos em contato para confirmar e fornecer informações adicionais, se necessário.",
}

];
