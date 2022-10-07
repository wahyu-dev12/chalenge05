# chalenge05

# Method Get

method get digunakan untuk mendapatkan data dari database

# 1. Mendapatkan Semua Data

| Base URL | Endpoint |
| -------- | :-----: |
| http://localhost:8080 | / |

## Response

```json
"msg": "success get all data",
"status": 200,
"datas": [
    {
        "id": 1,
        "name": "Avanza",
        "price": 1000,
        "size": "Small",
        "image": "/uploads/image-1664876892855-780553264.jpeg",
        "createdAt": "2022-10-04 16:48:12.87+07",
        "updatedAt": "2022-10-04 16:48:12.87+07"
    },
    {
        "id": 2,
        "name": "Toyota",
        "price": 2000,
        "size": "Large",
        "image": "/uploads/image-1665133775008-572680392.jpeg",
        "createdAt": "2022-10-07 16:09:35.026+07",
        "updatedAt": "2022-10-07 16:09:35.026+07"
    }
]
```


# 2. Mendapatkan Data Untuk di-Update

| Base URL | Endpoint | Method |
| -------- | :------: | :--: |
| http://localhost:8080 | /update/:id | GET |

## Response

```json
"msg": "success",
"status": 200,
"datas": {
    "id": 1,
    "name": "Avanza",
    "price": 1000,
    "size": "Small",
    "image": "/uploads/image-1664876892855-780553264.jpeg",
    "createdAt": "2022-10-04 16:48:12.87+07",
    "updatedAt": "2022-10-04 16:48:12.87+07"
}
```


# Method Post

method post digunakan untuk menambahkan data dari database

# 1. Menambahkan Data Baru

| Base URL | Endpoint | Method |
| -------- | :------: | :---: |
| http://localhost:8080 | /create | POST |

## Request

```json
{
    "name": "Avanza",
    "price": 1000,
    "size": "Small",
    "image": "gambar-avanza.jpeg"
}
```


## Response

```json
"msg": "Created",
"status": 201,
"datas": {
    "id": 1,
    "name": "Avanza",
    "price": 1000,
    "size": "Small",
    "image": "/uploads/image-1664876892855-780553264.jpeg",
    "createdAt": "2022-10-04 16:48:12.87+07",
    "updatedAt": "2022-10-04 16:48:12.87+07"
}
```


# Method Put

method put digunakan untuk mengubah data dari database

# 1. Mengubah Data

| Base URL | Endpoint | Method |
| -------- | :------: | :---: |
| http://localhost:8080 | /update | PUT |

## Request

```json
{
    "name": "Cenia",
    "price": 1000,
    "size": "Small",
    "image": "gambar-cenia.jpeg"
}
```

## Response

``` json
"msg": "Success",
"status": 200,
"datas": {
    "id": 4,
    "name": "Cenia",
    "price": 1000,
    "size": "Small",
    "image": "/uploads/image-1664876892855-780553264.jpeg",
    "createdAt": "2022-10-04 16:48:12.87+07",
    "updatedAt": "2022-10-04 16:48:12.87+07"
}
```

# Method Delete

method delete digunakan untuk menghapus data dari database

# 1. Menghapus Data

| Base URL | Endpoint | Method |
| -------- | :------: | :---: |
| http://localhost:8080 | /delete | DELETE |


# Contoh Request Yang Tidak Sesuai

## Request

``` json
{
    "name": "Honda X1",
    "price": 9000,
    "size": "Small",
    "image": "gambar-honda.txt"
}
```

## Response

```json
{
    "msg": "Bad Request",
    "status": 400,
    "errors": "Format file must be PNG, JPG, or JPEG"
}
```

## Ngelink
1. http://localhost:8081/
2. http://localhost:8081/create
3. http://localhost:8081/update/5

## ERD 
![ERD](https://user-images.githubusercontent.com/86102334/194604883-76f02fd4-653b-4eb8-a91c-0dc9f96d53dd.jpeg)




