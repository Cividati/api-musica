[![CI](https://github.com/Cividati/api-super-heroi/actions/workflows/ci.yml/badge.svg)](https://github.com/Cividati/api-super-heroi/actions/workflows/ci.yml)

# Api Musica
Api feita em nodejs capaz de realizar um CRUD de super herois no banco de dados firebase

## Como começar
```bash
node server.js
```
## Rotas:

### /create

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |
|     author    |       não       |  String  |
|    duration   |       não       |  String  |
|      year     |       não       |  String  |

- ie: 
```
localhost:80/create?name=Imagine&author=John Lennon&duration=3:45&year=1988
```

- Retorno:
```json
{
  "name": "Imagine",
  "author": "John Lennon",
  "duration": "3:45",
  "year": "1988",
  "class_name": "music"
}
```

### /read - NOT WORKING

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |

- ie:

```
localhost:80/read?name=Imagine
```

- Retorno:
```json
{
  "name": "Imagine",
  "author": "undefined",
  "duration": "undefined",
  "year": "undefined",
  "class_name": "music"
}
```

### /update

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |
|     author    |       não       |  String  |
|    duration   |       não       |  String  |
|      year     |       não       |  String  |

- ie: 
```
localhost:80/update?name=Imagine&year=1998
```

- Retorno:
```json
{
  "name": "Imagine",
  "author": "undefined",
  "duration": "undefined",
  "year": "1998",
  "class_name": "music"
}
```

### /delete

| **Parâmetro** | **Obrigatório** | **Tipo** |
|:-------------:|:---------------:|:--------:|
|      name     |       sim       |  String  |

- ie:

```
http://localhost/delete?name=Imagine
```

- Retorno:
```json
{
  "name": "Imagine",
  "status": "deleted"
}
```

## Autor:

- [Rubens Cividati](github.com/cividati)