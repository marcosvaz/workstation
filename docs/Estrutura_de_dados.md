[Documentação de Software](./Documentacao_de_software.md)

# Estrutura de dados

```text
"data"
└── "companies":
    ├── "companyId": "md5(Company CNPJ)"
    ├── "cnpj": "Company CNPJ"
    ├── "name": "Company Name"
    ├── "createdAt": "moment().format()"
    ├── "payment": "Payment status"
    ├── "administrator":
    │   ├── "userId": "md5(User email)"
    │   ├── "email": "User email"
    │   ├── "phone": "User phone"
    │   ├── "role": "administrator | manager"
    │   ├── "photo": "gs://url - Firebase Storage"
    │   ├── "name": "User name"
    │   ├── "password": "Personal encryption"
    │   └── "companyId": "md5(Company CNPJ)"
    ├── "colaboratorsGroups":
    │   ├── "groupId": "md5(moment().format())"
    │   ├── "name": "Group name"
    │   ├── "companyId": "md5(Company CPNJ)"
    │   └── "members":
    │       ├── "userId": "md5(User email)"
    │       └── "name": "User name"
    ├── "colaborators":
    │   ├── "userId": "md5(User email)"
    │   ├── "email": "User User email"
    │   ├── "phone": "User phone"
    │   ├── "photo": "gs://url - Firebase Storage"
    │   ├── "name": "User name"
    │   ├── "password": "Personal encryption"
    │   ├── "createdAt": "moment().format()"
    │   ├── "companyId": "md5(Company CNPJ)"
    │   ├── "status": "active | inative | be right back"
    │   └── "location":
    │       ├── "address": "User actual location"
    │       ├── "latitude": "User actual latitude"
    │       └── "longitude": "User actual longitude"
    ├── "graphs":
    │   ├── "id": Id
    │   ├── "title": "Graph title"
    │   └── "data":
    │       ├── "key": Graph key
    │       ├── "reference": "Reference of data"
    │       ├── "value": Value
    │       └── "svg":
    │           └── "fill": "Color"
    └── "tickets":
        ├── "ticketId": "md5(moment().format())"
        ├── "type": "Ticket type"
        ├── "severity": "Ticket severity"
        ├── "title": "Ticket title"
        ├── "details": "Details about the ticket"
        ├── "inCharge": "Person in charge for the ticket"
        ├── "location":
        │   ├── "address": "Ticket address"
        │   ├── "latitude": "Ticket latitude"
        │   └── "longitude": "Ticket longitude"
        ├── "datetime": "Day Month, Year | Hour:Minute"
        ├── "status": "complete | pending | delayed | canceled"
        ├── "scheduled":
        │   ├── "isScheduled": "true | false"
        │   └── "data":
        │       ├── "datetimeStart": "moment().format()"
        │       └── "datetimeEnd": "moment().format()"
        ├── "viewed":
        │   └── "userId": "md5(User email)"
        └── "comments":
            ├── "datetime": "moment().format()"
            ├── "userId": "md5(User email)"
            ├── "comment": "Comment"
            └── "viewed":
                └── "userId": "md5(User email)"

```


[Instalação](../README.md#instalação)
