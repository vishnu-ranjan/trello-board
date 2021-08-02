# TrelloBoard

Simple Trello board can be used to show list of works. This project is developed using [Angular](https://angular.io/) version 12.

## Table of contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Featurers](#features)
* [Usage](#usage)

## Installation

Clone the repo from Command Line Tool using the below command
> git clone
Or
Download the zip
Navigate to the directory trello-board and run the following commands
1. `npm install` - To download dependencies
2. `npm start`   - To run the app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technologies
1. [Angular](https://angular.io/)
2. [ng-bootstrap](https://ng-bootstrap.github.io) - Modal Popups & CSS
3. [lodash](https://lodash.com/docs/4.17.15#orderBy) - Utility library for implementing common functionlaites like sorting, searching etc.

## Features
1. Angular Routing
2. Typescript
3. Form Validations
4. HTML5 Drag & Drop
5. Modularised code with User defined types adhereing to the [Angular coding style guidelines](https://angular.io/guide/styleguide).

## Usage
* A simple to do app with predefined lists in a board will be shown on opening index.html file
* **Adjust the positons of lists by dragging and dropping at any place in board.**
* Add a new list to board, by clicking *Add List* button on top right corner of board. Name of the list is mandatory, to add a list to board. Otherwise list cannot be added to board.
* Edit any existing list, by clicking *Edit List* button on top right corner of list. Delete the list by clicking the *Delete* button.
* Adjust the postions of **Cards** in any list, by dragging and dropping at any required place.
* **A card can be dragged from any list, and can be dropped in any list**
* New card can be added to list, by clicking *Add New Card* button at bottom of a list.
* Edit any card by clicking *Edit Card* button in card. Delete the card by by clicking the *Delete* button.


## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.
