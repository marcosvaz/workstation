import theme from './AppTheme'

export const data = [
  {
    id: 1,
    name: 'funcionários',
    graph: [
      {
        key: 1,
        reference: 'ativos',
        value: 20,
        svg: {fill: theme.colorSecondary},
      },
      {
        key: 2,
        reference: 'ausentes',
        value: 10,
        svg: {fill: theme.warning},
      },
      {
        key: 3,
        reference: 'inativos',
        value: 12,
        svg: {fill: theme.inative},
      },
    ],
  },
  {
    id: 2,
    name: 'chamados',
    graph: [
      {
        key: 1,
        reference: 'atendidos',
        value: 20,
        svg: {fill: theme.success},
      },
      {
        key: 2,
        reference: 'pendentes',
        value: 12,
        svg: {fill: theme.warning},
      },
      {
        key: 3,
        reference: 'atrasados',
        value: 11,
        svg: {fill: theme.error},
      },
    ],
  },
  {
    id: 3,
    name: 'severidade',
    graph: [
      {
        key: 1,
        reference: 'alta',
        value: 20,
        svg: {fill: theme.error},
      },
      {
        key: 2,
        reference: 'média',
        value: 12,
        svg: {fill: theme.warning},
      },
      {
        key: 3,
        reference: 'baixa',
        value: 11,
        svg: {fill: theme.colorSecondary},
      },
    ],
  },
  {
    id: 4,
    name: 'teste',
    graph: [
      {
        key: 1,
        reference: 'atendidos',
        value: 20,
        svg: {fill: theme.success},
      },
      {
        key: 2,
        reference: 'pendentes',
        value: 12,
        svg: {fill: theme.warning},
      },
      {
        key: 3,
        reference: 'atrasados',
        value: 11,
        svg: {fill: theme.error},
      },
    ],
  },
];

export const tickets = [
  {
    id: '2109499',
    type: 'Manutenção',
    title: 'Arrumar encanamento',
    location: 'Rua João de Morais, 558',
    datetime: '14 Nov, 2019 | 19:11',
    status: theme.success,
  },
  {
    id: '2109494',
    type: 'Instalação',
    title: 'Instalar câmeras',
    location: 'Avenida Brasil, 1024',
    datetime: '12 Out, 2019 | 14:35',
    status: theme.warning,
  },
];
