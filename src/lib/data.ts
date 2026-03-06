interface Culto {
    dia: string
    hora: string
    tipo: string
}

interface Pastor {
    nombre: string
    contacto: string
}

interface RedesSocialesIglesia {
    facebook?: string
    instagram?: string
}

interface Iglesia {
    nombre: string
    anciano: string
    direccion: string
    pastor: string
    cultos: Culto[]
    ubicacion?: string
    redesSociales?: RedesSocialesIglesia
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
        nombre: 'Iglesia Adventista Residenciales San José',
        anciano: '',
        direccion: 'Carretera a Residenciales San José, San José Pinula',
        pastor: 'Emilio Alvarez',
        cultos: [
            { dia: 'Miércoles', hora: '18:00', tipo: 'Culto' },
            { dia: 'Viernes', hora: '18:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ],
        ubicacion: 'https://maps.app.goo.gl/TqJ8qXtxhUfM6yea6',
        redesSociales: {
            facebook: 'https://www.facebook.com/pinula4iglesiaa/',
        },
    },
    {
        nombre: 'Iglesia Adventista Pinula #1',
        anciano: '',
        direccion: 'Residenciales San José, San José Pinula',
        pastor: 'Emilio Alvarez',
        cultos: [
            { dia: 'Miércoles', hora: '18:00', tipo: 'Culto' },
            { dia: 'Viernes', hora: '18:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ],
        ubicacion: 'https://www.google.com/maps/dir//Iglesia+Adventista+Pinula+1,+GHQV%2BJ9P,+Residenciales+San+Jose,+San+Jos%C3%A9+Pinula,+Guatemala/@14.5302274,-90.4030951,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8589bb9a37449bab:0xbae729f6f12ce40f!2m2!1d-90.4065493!2d14.5390612?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D',
        redesSociales: {},
    },
    {
        nombre: 'Iglesia Adventista Pinula #2',
        anciano: '',
        direccion: '4ta Avenida 6-11, San José Pinula, Guatemala',
        pastor: 'Emilio Alvarez',
        cultos: [
            { dia: 'Miércoles', hora: '18:00', tipo: 'Culto' },
            { dia: 'Viernes', hora: '18:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ],
        ubicacion: 'https://www.google.com/maps/dir//Iglesia+Adventista+del+7mo.+D%C3%ADa,+Pinula+2,+4ta+Avenida+6-11,+San+Jos%C3%A9+Pinula,+Guatemala/@14.5302274,-90.4030951,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8589a3005b999215:0x26b299a88b85db6d!2m2!1d-90.411363!2d14.5426878?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D',
        redesSociales: {},
    },
    {
        nombre: 'Iglesia Adventista Pinula #3',
        anciano: '',
        direccion: 'San José Pinula, Guatemala',
        pastor: 'Emilio Alvarez',
        cultos: [
            { dia: 'Miércoles', hora: '18:00', tipo: 'Culto' },
            { dia: 'Viernes', hora: '18:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ],
        ubicacion: 'https://www.google.com/maps?s=web&sca_esv=9ce3d57fdcda1de3&lqi=CiJpZ2xlc2lhIEFkdmVudGlzdGEgU2FuIGpvc2UgcGludWxhSLbQ3tDzrYCACFo2EAAQARgAGAEYAhgDGAQiImlnbGVzaWEgYWR2ZW50aXN0YSBzYW4gam9zZSBwaW51bGEyAmVzkgEcc2V2ZW50aF9kYXlfYWR2ZW50aXN0X2NodXJjaOABAA&vet=12ahUKEwiIhpzf2YuTAxWf1RoGHYXNECYQ1YkKegQILhAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KfmxkCoLu4mFMWAcU-WFA-QI&daddr=GHRP%2BP2G,+San+Jos%C3%A9+Pinula,+Guatemala',
        redesSociales: {},
    },
    {
        nombre: 'Iglesia Adventista Pinula #4',
        anciano: '',
        direccion: '6 avenida, lotificación el chorrito lote 76 y 77 Zona 1, San José Pinula',
        pastor: 'Emilio Alvarez',
        cultos: [
            { dia: 'Miércoles', hora: '18:00', tipo: 'Culto' },
            { dia: 'Viernes', hora: '18:00', tipo: 'Recepción de sábado' },
            { dia: 'Sábado', hora: '09:00', tipo: 'Culto principal' },
        ],
        ubicacion: 'https://www.google.com/maps?s=web&sca_esv=9ce3d57fdcda1de3&lqi=CiJpZ2xlc2lhIEFkdmVudGlzdGEgU2FuIGpvc2UgcGludWxhSOm57u2Xq4CACFo2EAAQARgAGAEYAhgDGAQiImlnbGVzaWEgYWR2ZW50aXN0YSBzYW4gam9zZSBwaW51bGEyAmVzkgEcc2V2ZW50aF9kYXlfYWR2ZW50aXN0X2NodXJjaOABAA&vet=12ahUKEwiIhpzf2YuTAxWf1RoGHYXNECYQ1YkKegQILRAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KeW4z3xzu4mFMYY4-GSaw7No&daddr=6+avenida,+lotificaci%C3%B3n+el+chorrito+lote+76+y+77+Zona+1+San+Jos%C3%A9+Pinula,+01052,+Guatemala',
        redesSociales: {
            facebook: 'https://www.facebook.com/pinula4iglesiaa/',
        },
    },
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