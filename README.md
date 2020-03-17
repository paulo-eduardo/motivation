# Welcome to my Motivation Project

This project is a prototype to track motivation of the student during an activite. This is to help professor know and work around to be sure to keep the student motivation high.

## Prerequisites

Make sure to have the following CLI tools: `docker` and `docker-compose` to get it running properly.

## Steps to get the App running

### First step

Download the source code. You could download the source code by accessing it over this link: https://github.com/DanZeuss/schoology/archive/master.zip, or, using the `git` to clone it by running the command:

```
git clone https://github.com/Paulo-Eduardo/motivation/tree/develop
```

It will download all the source code from branch develop

### Second step

Before start the building process, please, be sure that there aren't services running in the ports `3000` (Node), and `27017` (MongoDB). Now go to student folder

```
yarn
```

Now go to the root folder of the project and run `docker`

```
docker-compose up --build
```

## API methods

All methods are served in the following URL path in the application: `localhost:3000/` + `controller` which changes according the business (student).

| URL              | Method | Description                     | Payload                                        |
| ---------------- | ------ | ------------------------------- | ---------------------------------------------- |
| `/student`       | GET    | Returns a list of students      |                                                |
| `/student`       | POST   | Add a new student               | `{ name: String, age: String, course: String}` |
| `/student/{id}`  | DELETE | Remove a student by its id      |                                                |
| `/student/{id}`  | GET    | Find a student by its id        |                                                |
| `/student?name=` | GET    | Search all students by the name |                                                |

You could perform requests using cURL (Adds a new course):

```
curl -X POST \
  http://localhost:3000/student \
  -H 'Accept: */*' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 389' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "Nayara Maggioni",
	"age": "21"
	"course": "makeup"
}'
```

Search by all elements that contains the char `a`:

```
curl -X GET \
  'http://localhost:3000/student?name=a' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'cache-control: no-cache'

```

## Running tests

To run the `API` tests, move to the student folder and run:

````
yarn test
```.

## Todos

- [ ] Implement microservice for activities
- [ ] Create front-end to consume student and activities crud`s
- [ ] Implement microservice for saving motivation during activities
- [ ] Implement controller for getting report on level of motivation during activities
- [ ] Showing this reports on frontend


# Thank you so much

I woud like to thank you by the opportunity that you gave me to implement this homework. I really loved to have a chance to be working on this.
````
