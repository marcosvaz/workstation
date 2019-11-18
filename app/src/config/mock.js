import theme from './AppTheme'

export const data = {
    "companies": [
        {
            "companyId": "8cabfe40780cef8824d0284b51d56303",
            "cnpj": "51.072.665/0001-41",
            "name": "Brasil Tecnologia",
            "createdAt": "2019-11-18T16:23:04-03:00",
            "payment": "ok",
            "administrator": [
                {
                    "userId": "3d5dfffad46510014164b0ba8c2a3e8f",
                    "email": "marcosvaz.me@gmail.com",
                    "photo": "gs://url - Firebase Storage",
                    "name": "Marcos Vaz",
                    "password": "Personal encryption",
                    "companyId": "8cabfe40780cef8824d0284b51d56303"
                }
            ],
            "colaboratorsGroups": [
                {}
            ],
            "colaborators": [
                {
                    "userId": "3d5dfffad46510014164b0ba8c2a3e8f",
                    "email": "Marcos Vaz",
                    "photo": "gs://url - Firebase Storage",
                    "name": "Marcos Vaz",
                    "password": "Personal encryption",
                    "companyId": "8cabfe40780cef8824d0284b51d56303",
                    "status": "active",
                    "location": {
                        "address": "Rua Robert Bosch, 568",
                        "latitude": "-46.6706758",
                        "longitude": "-23.5233829"
                    }
                }
            ],
            "graphs": [
                {
                    "id": 1,
                    "title": "funcionários",
                    "data": [
                        {
                            "id": 1,
                            "reference": "ativos",
                            "value": 20,
                            "svg": {
                                "fill": theme.colorSecondary
                            }
                        },
                        {
                            "id": 2,
                            "reference": "ausentes",
                            "value": 10,
                            "svg": {
                                "fill": theme.warning
                            }
                        },
                        {
                            "id": 3,
                            "reference": "inativos",
                            "value": 12,
                            "svg": {
                                "fill": theme.inative
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "chamados",
                    "data": [
                        {
                            "id": 1,
                            "reference": "atendidos",
                            "value": 20,
                            "svg": {
                                "fill": theme.success
                            }
                        },
                        {
                            "id": 2,
                            "reference": "pendentes",
                            "value": 12,
                            "svg": {
                                "fill": theme.warning
                            }
                        },
                        {
                            "id": 3,
                            "reference": "atrasados",
                            "value": 11,
                            "svg": {
                                "fill": theme.error
                            }
                        },
                        {
                            "id": 4,
                            "reference": "agendados",
                            "value": 18,
                            "svg": {
                                "fill": theme.warning
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "severidade",
                    "data": [
                        {
                            "id": 1,
                            "reference": "extrema",
                            "value": 5,
                            "svg": {
                                "fill": theme.error
                            }
                        },
                        {
                            "id": 2,
                            "reference": "alta",
                            "value": 20,
                            "svg": {
                                "fill": theme.error
                            }
                        },
                        {
                            "id": 3,
                            "reference": "média",
                            "value": 11,
                            "svg": {
                                "fill": theme.warning
                            }
                        },
                        {
                            "id": 4,
                            "reference": "baixa",
                            "value": 18,
                            "svg": {
                                "fill": theme.colorSecondary
                            }
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "departamentos",
                    "data": [
                        {
                            "id": 1,
                            "reference": "TI",
                            "value": 40,
                            "svg": {
                                "fill": theme.error
                            }
                        },
                        {
                            "id": 2,
                            "reference": "Suporte",
                            "value": 20,
                            "svg": {
                                "fill": theme.error
                            }
                        },
                        {
                            "id": 3,
                            "reference": "Portais",
                            "value": 11,
                            "svg": {
                                "fill": theme.warning
                            }
                        },
                        {
                            "id": 4,
                            "reference": "Bot",
                            "value": 18,
                            "svg": {
                                "fill": theme.colorSecondary
                            }
                        },
                        {
                            "id": 5,
                            "reference": "Agente Virtual",
                            "value": 18,
                            "svg": {
                                "fill": theme.colorSecondary
                            }
                        }
                    ]
                }
            ],
            "tickets": [
                {
                    "ticketId": "ac97d6be3da96b19756c174c8ff1287b",
                    "type": "Desenvolvimento",
                    "title": "Desenvolver Workstation",
                    "details": "Desenvolver o aplicativo da Workstation",
                    "inCharge": "Marcos Vaz",
                    "location": {
                        "address": "Rua Robert Bosch, 568",
                        "latitude": "-46.6706758",
                        "longitude": "-23.5233829"
                    },
                    "datetime": "18 Nov, 2019 | 17:11",
                    "status": "delayed",
                    "viewed": {},
                    "comments": [
                        {}
                    ]
                },
                {
                    "ticketId": "a55da8095e0c01167bfb3d06fccc7e3f",
                    "type": "Manutenção",
                    "title": "Arrumar câmeras",
                    "details": "Desenvolver o aplicativo da Workstation",
                    "inCharge": "Marco Aurélio",
                    "location": {
                        "address": "Rua Senador Lameira Bittencourt, 14",
                        "latitude": "-46.6706758",
                        "longitude": "-23.5233829"
                    },
                    "datetime": "18 Nov, 2019 | 17:11",
                    "status": "complete",
                    "viewed": {},
                    "comments": [
                        {}
                    ]
                }
            ]
        }
    ]
}