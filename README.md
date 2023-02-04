# Blue Bite Assessment

## Introduction

In this assessment you will create a front end web application that fetches Page entities from an API and renders them creating create a unique web page for each. In total there are three pages of increasing complexity and each are rendered using shared components. Pages when rendered should match the provided mockups. ([Figma](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=40%3A16&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=40%3A16&show-proto-sidebar=1)).

To get started a react project is included. TypeScript is strongly recommended for this exercise. CSS modules are supported using the `.module.css` extension alternatively you can use any styling tooling/library you choose. Feel free to add other dependencies as
necessary.

Some items have been over simplifed for the sake of the assignment. We are looking for general adherence to the mockups, but we understand that based on the information given you might need to make some best guesses (font, pixel size, etc). Internally we use Zeplin to communicate requirements to engineers.

You reach out with any questions. Any assumptions you make should be documented in the readme under _Developer Notes_. Assume that the person who reviews the exersize is not going to be the same person you interviewed with/asked questions to.

## API

All responses return either a `data` property containing responses contents in the case of an `ok` response. Alternatively it may return an `error` property.

### `GET /page/:id`

Returns a description of the page. Containing several parts:

```js
{
    lists: Array<{
        id, // ID used to look up the list
        components, // Ordered list of component ids
    }>;
    components: Array<{
        id, // ID used to look up component
        type, // The type of the component (ex: `image`, `weather`)
        options, // An object with options specific to the component type
    }>;
    variables?: Array<{
        name, // Variable name
        type, // Variable type (ex: `string`)
        initialValue, // Value the variable starts at
    }> // optional not used on page-one. Should be page specific.
}
```

### `GET /integration/weather?lat=<lat>&lon=<lon>`

Returns weather information for specific coordinates used in pages.

## Requirements

### Part 1

1. Create image component
2. Create weather component
3. Render components on page

#### **Part 1 Notes**

* Use the id (found in the pages path) via API to look up the Page entity mentioned in introduction.
* Cross referencing the Page entity and the mockups to create the `image` and `weather` components. The weather component will also require use of it's own API route described above in the introduction section.
* Using these components and the Page entity to render the page. You can assume the list with id 0 will always be the pages root.

#### **Part 1 Mockups**

* [Part 1](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=40%3A16&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=40%3A16&show-proto-sidebar=1)

### Part 2

1. Create Button Component
1. Create Condition Component
1. Setup Variables

#### **Part 2 Notes**

This page additionally includes variables, as well as 2 new components: button, and condition.

* Variables are set to their initial values when the page is loaded.
* Buttons when clicked change a variables current value.
* Conditions are components that render their `children` list when a specific variable is equal to the given value.

On completion this page will look like the mockups and the show and hide buttons should function.

#### **Part 2 Mockups**

* [Part 2](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=78%3A48&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=78%3A48&show-proto-sidebar=1)

### Part 3

1. Test previous work against a more complex page
1. Fix any issues

#### **Part 3 Notes**

* This page has show and hide buttons as well as buttons which rotation through the different
locations.

* There is no additional functionality but you should check your implementation against the more complex page configuration and resolve any issues.

* Again you can also check your implementation against the mockups.

#### **Part 3 Mockups**

* [Part 3](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=98%3A79&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=98%3A79&show-proto-sidebar=1)
* [Part 3 - NYC](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=98%3A111&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=98%3A111&show-proto-sidebar=1)
* [Part 3 - SF](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=98%3A151&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=98%3A151&show-proto-sidebar=1)
* [Part 3 - CH](https://www.figma.com/proto/9NtrKC7KAudIqARPU4OzfL/Front-End-Assessment?page-id=0%3A1&node-id=98%3A188&viewport=241%2C48%2C0.73&scaling=scale-down&starting-point-node-id=98%3A188&show-proto-sidebar=1)

## Submission

Upon completion of the assessment, please email your point of contact at Blue Bite a link to the repository.

## Local Setup

1. Clone repository into your GitHub account
1. Install Node version specified in `.nvmrc`
1. Use Yarn or NPM to install dependencies
1. Use 2 terminal sessions to start both the development server and the API via:
   * `yarn run start` OR `npm run start`
   * `yarn run start-server` OR `npm run start-server`
1. Follow steps in the `Requirements` section. Commit your work as needed.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn start-server`

Runs API by default this is hosted at [http://localhost:3030](http://localhost:3030)

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Assumptions

* 3 pages of varying complexities
  * pages are _not_ linked together and act as separate entities
  * pages are routed 1:1 with backend API (`::1:3000/page/page-one` &amp; `::1:3030/page/page-one`)
* 3 types of data properties
  * `lists`: list of components to be displayed for ID (ID is 1:1 with page ID (ex. 2 === page-two))
  * `variables`: a
  * `components`: inventory of available components by ID (ID of component is referenced in `lists`)

## Developer Notes

My solution included the following libraries:

* mobx & mobx-keystone ()
* react-router(-dom)

If there was additional time:

* design system/styling/theme system and not inline css={} style={}
* additional typing
* additional tests

---

> **Time:** Roughly 6 hours
>
> **Enjoyment:** 10/10
>
> **I'd love to work here**: 👍🏻+++

### Changelog

* Ran `npm-check-updates` to upgrade dependencies, so the latest node can be used (v14 -> v18). Any major/minor breaking changes in libs have also been addressed (ie. `react-router-dom`)

* Updated [README.md](./README.md)

* Fixed typo for property "upcomming" to "upcoming" in models

### API Responses

#### `GET /page/page-1`

ok response:

```json
{
  "data":{
    "lists":[
      {
        "id":0,
        "components":[
          1,
          2
        ]
      }
    ],
    "components":[
      {
        "id":1,
        "type":"image",
        "options":{
          "src":"/locations/new-york.png",
          "alt":"Cartoon of New York skyline"
        }
      },
      {
        "id":2,
        "type":"weather",
        "options":{
          "lon":"40.748607102729295",
          "lat":"-73.98563758004718"
        }
      }
    ]
  }
}
```

entity not found:

```json
{ "error": "Page Not Found" }
```

#### `GET /integration/weather?lon=40.748607102729295&lat=-73.98563758004718`

ok response:

```json
{
    "data": {
        "lon": "40.748607102729295",
        "lat": "-73.98563758004718",
        "condition": "cloudy",
        "conditionName": "Cloudy",
        "temperature": 78,
        "unit": "f",
        "location": "New York, NY",
        "upcomming": [
            {
                "day": "Fri",
                "condition": "cloudy",
                "conditionName": "Cloudy"
            },
            {
                "day": "Sat",
                "condition": "cloudy",
                "conditionName": "Cloudy"
            },
            {
                "day": "Sun",
                "condition": "rain",
                "conditionName": "Rain"
            }
        ]
    }
}
```

empty params:

```json
{ "error": "Invalid Coordinates" }
```

unavailable coords:

```json
{ "error": "Weather Not Available For Coordinates" }
```

### Data Modeling

#### Class/Data Models

* Weather (Class Model)
  * lon `string`
  * lat `string`
  * condition `string`
  * conditionName `string`
  * temperature `number`
  * unit `string`
  * location `string`
  * locationImage `string`
  * upcoming `{ day: string, condition: string, conditionName: string }[]`

* Page (Class Model)
  * lists `List[]`
  * components `Component[]`
  * variables `Variable[]`

* Component (used by Page)
  * id `string`
  * type `string`
  * options `{ [string]: any }`

* List (used by Page)
  * id `number`
  * components: number[]

* Variable (used by Page)
  * name `string`
  * type `string`
  * options: PageOption[]

* PageOption (used by Variables)
  * name `string`
  * type `string`
  * initialValue `any`

### Strategy

* Upgrade Node to the latest (15m)
* Upgrade dependencies to the latest (15m)
* Create primitive &amp; composed components
  * Composed Components
    * `<WeatherCard />`
  * Primitive Components (1hr)
    * `<Element />` (base of all other components)
    * `<Box />` (dynamic/flexible div)
    * `<Image />`
    * `<CardList />`
    * `<Card />` (acts as "button")
    * `<Text />`
    * `<Grid />` (layout)
* Create component `Behaviors`:
  * `<Behavior />`
* Hook up MVVM style state management w/ [mobx](https://mobx.js.org) and [mobx-keystone](https://mobx-keystone.js.org) for state management and catalyst for MVVM. (2hr)

### Notes

* Integration response didn't include an image URL, which I'd recommend adding to the response.
* Recommendation to change upcoming to an `Upcoming` model, to share between Components and Lists.
* Recommendation to use strings for IDs.
