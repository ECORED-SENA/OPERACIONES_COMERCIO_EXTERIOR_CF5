export default {
  global: {
    componenteFormativo: 'Desarrollo de la CDFI',
    descripcionCurso:
      'Este componente busca identificar cuál es la estructura básica de una matriz de costos dentro de la Cadena de Distribución Física Internacional, cuáles son sus actores u operadores logísticos y cómo se integran entre ellos; además, se establecen los componentes conceptuales de la teoría de costos para el adecuado desarrollo de la matriz de costos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Conceptualización de la teoría y desarrollo de las operaciones logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'La logística colombiana y su impacto en el comercio exterior',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cadenas de abastecimiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cadenas de suministro',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Términos de negociación. Los INCOTERMS y la CDFI',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Relación entre los términos de negociación y la CDFI',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Identificación de las operaciones cambiarias del proceso de comercio exterior',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Elaboración y costeo de la matriz de costos',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //nombreRuta: 'actividad',
      //icono: 'far fa-question-circle',
      //titulo: 'Actividad didáctica',
      //desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ramírez, C., García, M. y Pantoja, R. (2010). <em>Fundamentos y técnicas de costos.</em> Editorial Universidad Libre.',
      link:
        'http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS%20DE%20COSTO.pdf',
    },
    {
      referencia:
        'Tecnológico Nacional de México. (s. f.).<em> Evolución del Comercio Internacional.</em>',
      link: 'https://es.calameo.com/read/00507077164b6eb1b3771',
    },
    {
      referencia:
        'Villegas, M. (2019). Incoterms 2010, qué son y para qué sirven. Logisber.',
      link: 'https://logisber.com/blog/incoterms-2010',
    },
  ],
  glosario: [
    {
      termino: 'Arancel <em>ad valorem</em>',
      significado:
        'Es un derecho que se paga por importaciones. Su valor puede ser porcentual y está identificado en el arancel de aduanas.',
    },
    {
      termino: 'Cambios',
      significado:
        'Operaciones cambiarias referentes a la conversión de moneda entre países.',
    },
    {
      termino: 'Costo',
      significado:
        'Cantidad de dinero que se requiere para producir, comercializar o prestar un servicio.',
    },
    {
      termino: 'Exportación',
      significado:
        'Salida de bienes y/o servicios del territorio aduanero nacional hacia terceros países o hacia una zona franca.',
    },
    {
      termino: 'Importación',
      significado:
        'Ingreso de bienes y/o servicios al territorio aduanero nacional procedente de terceros países o de una zona franca.',
    },
    {
      termino: 'INCOTERMS',
      significado: 'Términos del comercio internacional.',
    },
    {
      termino: 'IVA',
      significado:
        'IVA	Impuesto al valor agregado. Aplica para las operaciones de importación y su base es el estatuto tributario.',
    },
  ],
  complementario: [
    {
      texto:
        '1. Conceptualización de la teoría y desarrollo de las operaciones logísticas.	Ramírez, C., García, M. y Pantoja, R. (2010). <em>Fundamentos y técnicas de costos.</em> Editorial Universidad Libre.',
      tipo: 'Libro',
      link:
        'http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS%20DE%20COSTO.pdf ',
    },
    {
      texto:
        '1.4 Términos de negociación. Los INCOTERMS y la CDFI. Tecnológico Nacional de México. (s. f.). <em>Evolución del Comercio Internacional.</em>',
      tipo: 'Gráfico',
      descarga: 'https://es.calameo.com/read/00507077164b6eb1b3771',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Salazar Buitrago',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios Empresariales - Regional Norte de Santander',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
