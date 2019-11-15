### [voltar](../README.md)

# Estrutura de dados

```text
"data"
└── "company":
    ├── "companyId": "md5(Company CNPJ)"
    ├── "cnpj": "Company CNPJ"
    ├── "name": "Company Name"
    ├── "administrator":
    │   ├── "userId": "md5(User email)"
    │   ├── "email": "User email"
    │   ├── "photo": "gs://url - Firebase Storage"
    │   ├── "name": "User name"
    │   ├── "password": "Personal encryption"
    │   └── "companyId": "md5(Company CNPJ)"
    ├── "colaboratorsGroups":
    │   ├── "groupId": "md5(moment().format())"
    │   ├── "name": "Group name"
    │   └── "members":
    │       ├── "userId": "md5(User email)"
    │       └── "name": "User name"
    ├── "colaborators":
    │   ├── "userId": "md5(User email)"
    │   ├── "email": "User User email"
    │   ├── "photo": "gs://url - Firebase Storage"
    │   ├── "name": "User name"
    │   ├── "password": "Personal encryption"
    │   ├── "companyId": "md5(Company CNPJ)"
    │   ├── "status": "active | inative | be right back"
    │   └── "location":
    │       ├── "address": "User actual location"
    │       ├── "latitude": "User actual latitude"
    │       └── "longitude": "User actual longitude"
    ├── "graphs":
    │       ├── "title": "Graph title"
    │       └── "data":
    │           ├── "id": Id
    │           ├── "reference": "Reference of data"
    │           ├── "value": Value
    │           └── "svg":
    │               └── "fill": "color"
    └── "tickets":
        ├── "ticketId": "md5(moment().format())"
        ├── "type": "Type of ticket"
        ├── "title": "Title of ticket"
        ├── "details": "Details about the ticket"
        ├── "inCharge": "Ticket in charge"
        ├── "location":
        │   ├── "address": "Ticket address"
        │   ├── "latitude": "Ticket latitude"
        │   └── "longitude": "Ticket longitude"
        ├── "datetime": "Day Month, Year | Hour:Minute"
        ├── "status": "complete | pending | delayed | canceled"
        ├── "viewed": { "userId": "md5(User email)" }
        └── "comments":
            ├── "datetime": "moment().format()"
            ├── "userId": "md5(User email)"
            ├── "comment": "Comment"
            └── "viewed": { "userId": "md5(User email)" }
```