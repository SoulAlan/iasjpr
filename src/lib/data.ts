interface Culto {
    dia: string
    hora: string
    tipo: string
}

interface Pastor {
    nombre: string
    contacto: string
}

interface Iglesia {
    nombre: string
    anciano: string
    direccion: string
    pastor: string
    cultos: Culto[]
}

interface Actividad {
    pastor: Pastor
    anciano: string
    iglesiaResponsable: string
    hora: string
    telefono: string
    descripcion: string
    nombre: string
    fecha: string
}

interface ImagenGaleria {
    url: string
    descripcion: string
}

export const iglesias: Iglesia[] = [
    {
        nombre: 'Residenciales',
        anciano: 'Jhonathan',
        direccion: 'Residenciales san josé san josé pinula',
        pastor: 'Rolando',
        cultos: [
            { dia: 'Miércoles', hora: '19:00', tipo: 'Reunión de oración' },
            { dia: 'Viernes', hora: '19:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ]
    }, {
        nombre: 'Iglesia No. 4',
        anciano: 'Alberto',
        direccion: 'Zona 4 5-60 SJP',
        pastor: 'Rolando',
        cultos: [
            { dia: 'Miércoles', hora: '19:00', tipo: 'Reunión de oración' },
            { dia: 'Viernes', hora: '19:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ]

    }
]

export const galeria: ImagenGaleria[] = [
    {
        url: "/images/galeria/dummie1.jpeg",
        descripcion: "dummie1"
    }, {
        url: "/images/galeria/dummie1.jpeg",
        descripcion: "dummie1"
    }
]

export const actividades: Actividad[] = [
    {
        pastor: {
            nombre: 'Emilio', contacto: '33332228'
        },
        anciano: "Jhonathan",
        iglesiaResponsable: "Residenciales",
        hora: "9:30",
        telefono: "46547986",
        descripcion: "Pruebas de Descripción",
        nombre: "Juventud",
        fecha: "12/MAR/2026"
    }, {
        pastor: {
            nombre: 'Emilio', contacto: '33332228'
        },
        anciano: "Jhonathan",
        iglesiaResponsable: "Residenciales",
        hora: "9:30",
        telefono: "46547986",
        descripcion: "Pruebas de Descripción",
        nombre: "Juventud",
        fecha: "12/MAR/2026"
    }
]

export const contacto = {
    telefono: '...',
    email: '...',
    direccion: '...',
}

export const redesSociales = {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    whatsapp: '...',
}