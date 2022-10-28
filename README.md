# Simple server

A simple barebone `Express js` host with a single GET endpoint that returns this JSON response  

* **URL**
    /

* **Method:**
    `GET`

* **URL Params**
    None

* **Data Params**
    None

* **Success Response:**
    * **Code:** `200`
    * **Content:**

        ```json

        {
            "slackUsername": "beingnile",
            "backend": true,
            "age": 21,
            "bio": "Hi, Nice to meet you!!!, my name is Nile and I build cool stuff for software backend. On the side, I make music and enjoy chess"
        }

        ```

* **Sample Call:**

    ```sh
    # Follow steps on getting started to set the project up locally
    curl http://localhost:8000 | json_pp
    # Piping out to json_pp prettifies the json output
    ```

The API is exposed on [this](https://vast-reef-90221.herokuapp.com/) URL.  

## Getting started

You must ensure that you have node, git and npm installed on your system.
Run the following commands to check if you have them installed

```sh

node --version
npm --version
git --version

```

* Clone this repo and navigate to the project directory

```sh

git clone https://github.com/beingnile/hng-backend_task_one
cd hng-backend_task_one

```

* Install all required packages

```sh

npm install

```

* Run the build script to compile the `index.ts` file to `index.js`

```sh

npm run build

```

* Fire up the server

```sh

npm run dev

```
