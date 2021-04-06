<p align="center">
<img height="40" src="https://www.productboard.com/wp-content/themes/productboard_rebrand/public/img/productboard-logo.svg">
</p>

---
[![Unit Tests](https://github.com/hermape7/pb-todo/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/hermape7/pb-todo/actions/workflows/unit-tests.yml) [![E2E Tests](https://github.com/hermape7/pb-todo/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/hermape7/pb-todo/actions/workflows/e2e-tests.yml)
---

Summary from Me (Petr):
Unit tests:
- I have added the function for getting a planet by a name. I had to a bit change getting all planets from the API because there was pagination. 
- I have created tests with help of snapshots. 
- I have added a GitHub action with running unit tests and storing the coverage into the artifacts so this coverage can be downloaded and checked afterward..

E2E tests:
- I have added E2E tests for some functionality.
- I took it as a real use cases that users can face.
- I am using seeding the UI via the model of the app (in other apps it is usually the API or seeding the database).
- The structure is obvious but I would like to point out that in the shared folder there are files with data attributes that should be used even in the source code but the app is written in an older way and I didn't want to change the whole implementation. So what is the benefit there - when the data-cy attributes need to be changed then it is changed only in one place (for source code and for e2e/cypress tests).
- Under the support folder, there are custom functions that helps with writing tests (and with verifications). There are not "custom cypress commands" but they can be easily re-written to them.
- Some kind of bonus: I wrote a test for destroying the todo item by hovering and clicking the destroy button with help of the cypress-real-event library which is very convenient for this.

I would be glad to here the feedback for these tests. 

I have also added a GitHub workflow for E2E tests but only if unit tests will pass their own action. Screenshots and videos are saved under the artifacts folder if there are some fails.
---

### Before you start

Please create a private fork of this repository and work on that one. Once you're ready to share your work with us, please grant access to your repository to the owner of this (the original) repository.
### Goals of this exercise

1. Write some automated E2E tests for the TO-DO application that's located under the `e2e` directory using [Cypress](https://docs.cypress.io). The goal is *not* to add full coverage, instead, focus on how to organize the code well in a way that is maintainable if the project grows big.

2. Under the directory `./unit/js` there's a library `sw-client.js` wich is an API client 
for the [Star Wars API](https://swapi.dev/).
Please add a new function to this library to find and return a planet by its name.

3. Write unit tests for the `sw-client.js` library that's located under the `unit` directory using [Jest](https://jestjs.io/)

4. Configure the unit tests to run automatically for pull requests under your repository using [GitHub actions](https://github.com/features/actions)

Inside each of the two directories `e2e` and `unit`, you will find further instructions about the specific component of the exercises 1 and 3 and instructions
on how to get setup, run the app and how to run the tests (if applicable).

The main idea is to showcase your skills, so rather than trying to add a lot of coverage, which can be time consuming, please focus rather on showing what you can do 💪
We care about clean and well organized code that would scale well if the application being tested grows into a big project.

There is no maximum timeframe to complete this assignment so feel free to take as much time as you need to prepare something you're proud of 🚀
