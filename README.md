1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://sergii-nosachenko.github.io/js_fetch_data_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Fetch data

API Urls:
- List URL: https://mate-academy.github.io/phone-catalogue-static/api/phones.json
- Details URL: https://mate-academy.github.io/phone-catalogue-static/api/phones/:phoneId.json

The main goal of this task is practice of fetching data from API.
Your task is create function `getPhones` that should `resolve` with the list of phones or `reject` in `5` second.

After receiving list of phones get all IDs and fetch all details for these phone ids with function `getPhonesDetails`, which takes array of IDs.
`getPhonesDetails` should `resolve` with an array of details of each phone in the list or `reject` on any error.

Show phone names using the DOM.

(optional) Combine all data. Make array `phonesWithDetails`.
