# React JS Notes

- [React JS Notes](#react-js-notes)
  - [Development](#development)
    - [Important command](#important-command)
  - [Component](#component)
    - [JSX Rules](#jsx-rules)
    - [Nested Component](#nested-component)
    - [CSS in JSX](#css-in-jsx)
    - [JS in JSX](#js-in-jsx)
    - [Props](#props)
    - [Children Props](#children-props)
    - [List](#list)
    - [Events](#events)
    - [Import and Export](#import-and-export)
  - [Hooks](#hooks)
    - [General Hooks Rule](#general-hooks-rule)
    - [useState](#usestate)
    - [Use Effect](#use-effect)
    - [Conditional Rendering](#conditional-rendering)
    - [Short Circuit Evaluation](#short-circuit-evaluation)
    - [Controlled Input](#controlled-input)
    - [UseRef Hook](#useref-hook)
    - [UseReducer Hook](#usereducer-hook)

## Development

- use node 18.12.1 LTS
- Babel:- Javascript compiler (convert new javascript[ES6] to old javascript[ES5])
- webpack :- module bundler .
- Create React App tool. https://github.com/facebook/create-react-app
- npm audit says I have a vulnerability in react-scripts! -- https://github.com/facebook/create-react-app/issues/11174
- we will use npx which is already part of npm (>5.2.0).
- ES7+ React/Redux/React-Native/JS snippets
  - snippet :- https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
- **Version Upgrade** npm-check-updates , ncu -u and npm install

### Important command

- npm start
  Starts the development server.
- npm run build
  - Bundles the app into static files for production.
- npm test
  - Starts the test runner.
- npm run eject
  - Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

## Component

- Function name must be capitalize for React to understand that this is special and component.
- Can use normal or arrow function both.
- return value from function is called JSX sometimes called HTML
- stateless functional component / dumb component.
- always return JSX

```javascript
import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   // called HTML or JSX
//   return <h4>This is Ashutosh and this is my first component</h4>;
// }
// function Greeting() {
//   // called HTML or JSX
//   return (
//     <div>
//       <h4>This is Ashutosh and this is my first component</h4>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World!!!")
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));

// Render for react 18 and above
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
```

### JSX Rules

- always return single element.
- div/section/article or React Fragment
- React Fragment
  - short hand <></>
  - <React.Fragment></React.Fragment>
- use camelCase for html attribute
- className instead of class
- close every element
- formatting use parenthesis so it's easy to format .

### Nested Component

```javascript
import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  // called HTML or JSX
  return (
    <div>
      <Person />
      <Info />
    </div>
  );
}

const Person = () => <h2>Ashutosh</h2>;
const Info = () => {
  return <p>THis is my first nested component.</p>;
};
ReactDom.render(<Greeting />, document.getElementById("root"));
```

### CSS in JSX

- Basic way to add CSS in react is import file directly in index.js
  - import "./normalize.css";
  - import "./index.css";
- But there is another way to add css in Javascript.
  - create style={{}} - **Inline CSS** and we won't be able to override.

```javascript
<h5 style={{ color: "#617d98", fontSize: "1rem", marginTop: "1rem" }}>
```

### JS in JSX

- One rule of setting javascript in JSX is that it must return a value . It has to be an expression and it can't be a statement.

```javascript
import React from "react";
import ReactDom from "react-dom";
import "./normalize.css";
import "./index.css";
function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title></Title>
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className="img book-thumbnail"
    src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Book Title"
  />
);
const titleValue = "I Love You to the Moon and Back!";
const Title = () => <h2>{titleValue.toUpperCase()}</h2>;
const Author = () => (
  <h5 style={{ color: "#617d98", fontSize: "1rem", marginTop: "1rem" }}>
    Amelia Hepworth
  </h5>
);
ReactDom.render(<BookList />, document.getElementById("root"));
```

### Props

- Mulitple ways to pass props.
  - Simple by property name :- <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
  - By Object :- [List Example 1 ](#list)
  - By Spread Operator :- [List Example 2](#list)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";

const firstBook = {
  title: "I Love You to the Moon and Back!",
  author: "Amelia Hepworth",
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};
const secondBook = {
  title: "Our Class is family!",
  author: "Shannon Olsen",
  img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
};

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

// const Book = (props) => {
//   // console.log(props);
//   return (
//     <article className="book">
//       <img className="img book-thumbnail" src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h5>{props.author}</h5>
//     </article>
//   );
// };
const Book = ({ title, img, author }) => {
  // console.log(props);
  //const { title, img, author } = props // if props is accepted as argument;
  return (
    <article className="book">
      <img className="img book-thumbnail" src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{author}</h5>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

### Children Props

- Children prop is content that we render between opening and closing tag of the component.
- Don't self close the tag.
- You can put any content.
- children is the property under props which can be accessed using props.children or you can destructure (name has to match)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";

const firstBook = {
  title: "I Love You to the Moon and Back!",
  author: "Amelia Hepworth",
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};
const secondBook = {
  title: "Our Class is family!",
  author: "Shannon Olsen",
  img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
};

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, hic
          aliquam. Consequuntur ratione quam deleniti laborum error nisi modi
          quos.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  );
}

const Book = ({ title, img, author, children }) => {
  return (
    <article className="book">
      <img className="img book-thumbnail" src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{author}</h5>
      {children}
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

### List

- Use map to return component.
- We need to have unique key prop for each item in the list.
- key is special props which is used to identify the uniqueness of element and react will keep track of which element is removed or added.
- you can have unique value in map index but don't use it as if you add or remove the element it will create issue as index will change .

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back!",
    author: "Amelia Hepworth",
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "Our Class is family!",
    author: "Shannon Olsen",
    img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
  },
];

// props contains books so we have nested object destructing
const Book = ({ book: { title, img, author } }) => {
  // You can also do
  // const { title, img, author }= props.book;
  return (
    <article className="book">
      <img className="img book-thumbnail" src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{author}</h5>
    </article>
  );
};
const newBooks = books.map((book) => {
  // we are returning book component.
  // another way to pass the props are.
  return <Book key={book.id} book={book}></Book>;
});
//console.log(newBooks);

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">{newBooks}</section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back!",
    author: "Amelia Hepworth",
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "Our Class is family!",
    author: "Shannon Olsen",
    img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
  },
];

// props contains books so we have nested object destructing
const Book = ({ title, img, author }) => {
  // You can also do
  // const { title, img, author }= props.book;
  return (
    <article className="book">
      <img className="img book-thumbnail" src={img} alt={title} />
      <h2>{title}</h2>
      <h5>{author}</h5>
    </article>
  );
};
const newBooks = books.map((book) => {
  // we are returning book component.
  // another way to pass the props are by Object.
  //return <Book key={book.id} book={book}></Book>;
  // by Spread operator
  return <Book key={book.id} {...book}></Book>;
});
//console.log(newBooks);

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">{newBooks}</section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

### Events

- attribute and event handler (onClick,OnMouseOver)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back!",
    author: "Amelia Hepworth",
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    title: "Our Class is family!",
    author: "Shannon Olsen",
    img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
  },
];

const clickHandler = (e) => {
  console.log(e);
  alert("Hello World");
};
const complexExample = (auhtor) => {
  alert(auhtor);
};
// props contains books so we have nested object destructing
const Book = ({ title, img, author }) => {
  // You can also do
  // const { title, img, author }= props.book;
  return (
    <article className="book">
      <img
        className="img book-thumbnail"
        onMouseOver={() => {
          alert("mouse over image");
        }}
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <button className="btn" type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          alert(title);
        }}
      >
        Inline Example
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => {
          complexExample(author);
        }}
      >
        Complex Example
      </button>
    </article>
  );
};
const newBooks = books.map((book) => {
  // we are returning book component.
  // another way to pass the props are by Object.
  //return <Book key={book.id} book={book}></Book>;
  // by Spread operator
  return <Book key={book.id} {...book}></Book>;
});
//console.log(newBooks);

function BookList() {
  // called HTML or JSX
  return (
    <section className="section-center book-container">{newBooks}</section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

### Import and Export

- default export :- `export default books;`
- only one default export per file.
- for default export you can choose any name you want while importing.
- named export :- name need to match while importing.

## Hooks

- Hooks are functions React provides to help us to complete various tasks.
- Most important are useState and UseEffect

### General Hooks Rule

- it start with use.
- component name must be uppercase.
- must be in the function/component body.
- cannot call conditionally

### useState

- `import {useState} from 'react'`
- it return array with two value first as value and second as function.
- value can be anything String, Array, Object , List which we want to set.
- Every time we setState value , component will re render.

```javascript
import React, { useState } from "react";

const UseStateBasicExample = () => {
  //   console.log(useState("hello world"));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  const [text, setText] = useState("Random Title");
  const handleClick = (e) => {
    if (text === "Random Title") {
      setText("New Random Title");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasicExample;
```

### Use Effect

- it allows you to do the side effects. (Any work outside of the component)
  - It could be changing the document title.
  - Signing up for the subscription.
  - fetching data
  - setting up a event listener.
- By default runs after every render.
- **Imp** You can't make useEffect callback function async.
- second parameter.
  - [] -- array of dependencies / List of dependencies.
  - [] - if empty , it will only run on initial render.
  - [value] - here value is dependency and it will run when value will change.
  - You can have multiple useEffect .
- clean up function.
  - cleanup function is very useful for conditional rendering.

```javascript
import React, { useState, useEffect } from "react";

const useEffectBasicExample = () => {
  const [value, setValue] = useState(0);
  // Will be called on initial render and once value change.
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Message - ${value}`;
    }
  }, [value]);

  // Will be called only once on initial render.
  useEffect(() => {
    console.log("hello World");
  }, []);
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default useEffectBasicExample;
```

```javascript
import React, { useState, useEffect } from "react";

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    //cleanup function is very useful for conditional rendering.
    return () => {
      console.log("Clean Up");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default useEffectCleanup;
```

```javascript
import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const useEffectFetchData = () => {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // Import tp set useEffect with empty dependency list else it will trigger chain .
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Git Hub User</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img className="user-img" src={avatar_url} alt="" />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default useEffectFetchData;
```

### Conditional Rendering

```javascript
import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
      // Import tp set useEffect with empty dependency list else it will trigger chain .
    } catch (error) {
      console.log("Error", error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <>
        <div>
          <h1>Loading....</h1>
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>
          <h1>Error....</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <h3>Git Hub User</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img className="user-img" src={avatar_url} alt="" />
              <div>
                <h5>{login}</h5>
                <a href={html_url} target="_blank">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MultipleReturn;
```

### Short Circuit Evaluation

- In JavaScript short-circuiting, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result. If the result is clear even before the complete evaluation of the expression, it short circuits and the result will be returned. Short circuit evaluation avoids unnecessary work and leads to efficient processing.
- AND(&&) short circuit: In case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with &&(logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned.
- OR(||) short circuit: In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned.

- In **REACT** if doesn't return a value so we can't use this for conditional rendering.

```javascript
function gfg() {
  // AND short circuit
  document.write(false && true);
  document.write("</br>");
  document.write(true && true);
  document.write("</br>");
  // OR short circuit
  document.write(true || false);
  document.write("</br>");
  document.write(false || true);
}
gfg();

// Output
false;
true;
true;
true;

// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false);

// Whole expression will be evaluated.
console.log(true && true && true);

// First operand is true and operator is ||,
// evaluation stops and true is returned.
console.log(true || false || false);

// Evaluation stops at the second operand(true).
console.log(false || true || true || false);
```

**Short Circuit in React and Ternary Operator Example**

```javascript
import React, { useState } from "react";

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("");
  // const firstVal = text || "Hello world";
  // const secondVal = text && "Hello world";
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* <h1>FirstValue: {firstVal}</h1>
      <h1>SecondValue: {secondVal}</h1> */}

      <h1>{text || "Default Heading"}</h1>
      {text && <h1>Include Component based on Condition</h1>}
      {!text && <h1>Include Component based on Condition</h1>}
      {isError && <h1>Error shown using circuit evaluation ...</h1>}
      {isError ? (
        <h1>Error shown using ternary operator ...</h1>
      ) : (
        <h1>There is No Error ternary operator...</h1>
      )}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
    </>
  );
};

export default ShortCircuitEvaluation;
```

**Show/Hide**

```javascript
import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        {" "}
        Show/Hide
      </button>
      {show && <Item></Item>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h1>Size:{size} PX</h1>
    </div>
  );
};

export default ShowHide;
```

### Controlled Input

```javascript
import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [msgState, setMsgState] = useState(false);

  const handleMsgState = () => {
    setMsgState(true);
    setTimeout(() => {
      setMsgState(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const id = Math.ceil(Math.random() * 1000000000);
      const personObj = { id, firstName, lastName, email };
      console.log("Person Added");
      setPeople((people) => {
        return [...people, personObj];
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      handleMsgState();
    } else {
      console.log("Empty Values");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={`alert alert-success ${msgState ? `show` : `hide`}`}
          style={{ marginTop: "2rem" }}
        >
          Added Successfully
        </div>
        <button type="submit" className="btn" style={{ marginTop: "2rem" }}>
          add person
        </button>
      </form>
      <article className="section-center">
        {people.length > 0 && (
          <div className="form">
            <div className="title">
              <h1>People List</h1>
            </div>
            <div className="persons-container">
              {people.map((item) => {
                return (
                  <div className="person" key={item.id}>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default ControlledInputs;
```

```javascript
import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [peopleList, setPeopleList] = useState([]);
  const [msgState, setMsgState] = useState(false);

  const handleMsgState = () => {
    setMsgState(true);
    setTimeout(() => {
      setMsgState(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;
    setPerson({ ...person, [propertyName]: propertyValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.lastName && person.email) {
      const id = Math.ceil(Math.random() * 1000000000);
      const personObj = { ...person, id };
      console.log("Person Added");
      setPeopleList([...peopleList, personObj]);
      setPerson({
        firstName: "",
        lastName: "",
        email: "",
      });
      handleMsgState();
    } else {
      console.log("Empty Values");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div
          className={`alert alert-success ${msgState ? `show` : `hide`}`}
          style={{ marginTop: "2rem" }}
        >
          Added Successfully
        </div>
        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          style={{ marginTop: "2rem" }}
        >
          add person
        </button>
      </form>
      <article className="section-center">
        {peopleList.length > 0 && (
          <div className="form">
            <div className="title">
              <h1>People List</h1>
            </div>
            <div className="persons-container">
              {peopleList.map((item) => {
                return (
                  <div className="person" key={item.id}>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.email}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default MultipleInputs;
```

### UseRef Hook

- Preserves Value.
- Doesn't trigger re-render.
- target DOM nodes/elements

```javascript
import React, { useRef, useEffect } from "react";

const UseRefBasics = () => {
  const emailRef = useRef(null);
  const testSectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  // we can go without empty dependency list as well because useRef wil not rerender the component.
  useEffect(() => {
    emailRef.current.focus();
    console.log(testSectionRef.current);
    testSectionRef.current.style = { background: "blue" };
    testSectionRef.current.style.display = "inline-block";
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
          />
        </div>
        <button type="submit" className="btn" style={{ marginTop: "2rem" }}>
          Subscribe
        </button>
      </form>
      <div className="test-section" ref={testSectionRef}>
        Hello-world
      </div>
    </>
  );
};

export default UseRefBasics;
```

### UseReducer Hook

- The useReducer Hook is similar to the useState Hook.
- It allows for custom state logic.
- If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
