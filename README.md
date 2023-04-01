# Front-end Practicum Task 4 - Emoji Search Test - [patika.dev](https://www.patika.dev/bootcamp/fmss-bilisim-front-end-practicum)

## Setup
```cmd
git clone https://github.com/Gurkankaradag0/Front-end-Practicum-Task-4-Emoji-Search-Test.git
cd Front-end-Practicum-Task-4-Emoji-Search-Test
npm i
```

## Scenario
- The Header should be rendered successfully. ***(Header.test.js)***
- The Emoji List should be rendered successfully. ***(Emoji.test.js - test-1)***
- The Emoji List must be recreated with the entered value. ***(Emoji.test.js - test-2)***
- When the emoji row is clicked, the emoji should be copied to the clipboard. ***(Emoji.test.js - test-3)***

## Run Test
```cmd
npm run test
```

## Result
![](https://i.imgur.com/229bYJq.png)

## Changes in [Main Repo](https://github.com/ahfarmer/emoji-search)
- add dependencies:
    ```cmd
    npm i --save-dev @testing-library/react@12.1.2
    npm i --save-dev @testing-library/jest-dom
    ```

- in SearchInput.js:
    ```html
    <input onChange={this.handleChange} /> 
    ``` 
    to
    ```html
    <input onChange={this.handleChange} data-testid="search-input" />
    ``` 

- in EmojiResultRow.js:
    ```html
    <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
    >
    ``` 
    to
    ```html
    <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
        data-testid="emoji-row"
    >
    ``` 

## Developed By
***Gürkan Karadağ***

## Social
[![Linkedin](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/g%C3%BCrkan-karada%C4%9F-bb0243205/)