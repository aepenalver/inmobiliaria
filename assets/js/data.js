// Arrays de Objetos
const propiedades_alquiler = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: " 924 Main Street, Anytown, CA 91234",
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: " 456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: " 907 Southstreet, Tinytown, CA 18364",
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casa de lujo con piscina",
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Elegante y lujosa casa cerca de la playa llena de comodidades y con piscina",
        ubicacion: "841 Suculent St, Daysun AD 61252",
        habitaciones: 2,
        banios: 2,
        costo: 3100,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Cabaña acogedora en parque nacional",
        src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Cómoda cabaña en el parque nacional de Easytown, incluye piscina temperada y chimenea",
        ubicacion: "721 Mountain Park, Easytown ET 93745",
        habitaciones: 2,
        banios: 1,
        costo: 2300,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Condominio turistico en las afueras de la ciudad",
        src: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Compacto penthouse en centro turístico en zona tranquila a 5km de la ciudad",
        ubicacion: " 724 Keyroad, Neartown, KN 17263",
        habitaciones: 2,
        banios: 1,
        costo: 2300,
        smoke: false,
        pets: true,
    },
];

const propiedades_ventas = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: " 123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke: false,
        pets: true,
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: " 567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Moderna casa de lujo ",
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Amplia casa lujosa con piscina y acceso a campo de golf",
        ubicacion: " 713 Golfyard, Holetown, GH 13624",
        habitaciones: 2,
        banios: 3,
        costo: 3100,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Condominio turistico exclusivo",
        src: "https://images.unsplash.com/photo-1700126689261-1f5bdfe5adcc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Condominio exclusivo de uso turístico con clima de montaña",
        ubicacion: " 182 Mountainview, Forestown, FT 41241",
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: true,
        pets: false,
    },
    {
        nombre: "Departamento playero",
        src: "https://images.unsplash.com/photo-1534655610770-dd69616f05ff?q=80&w=956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Cómodo departamento cerca de la playa",
        ubicacion: " 163 Beachtown, Searoad, AC 81638",
        habitaciones: 2,
        banios: 1,
        costo: 1800,
        smoke: true,
        pets: true,
    },
];
