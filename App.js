import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(object) => HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "React Lover using React.createElement()🚀"); // Not development friendly
console.log(heading);

// React Element - JSX is created by facebook Engineer's
const jsxHeading = (<h1 className="heading"
    tabIndex="1">
    React Lover using JSX 🚀
</h1>);
console.log(jsxHeading);

// React Functional Component
const Heading2 = () => (
    <h1 className="heading"
        tabIndex="1">
        React Lover using React Functional Component 🚀
    </h1>
);
console.log(Heading2);

// ------------------------------------------
const fn = () => true;
console.log(fn);

// ==========================================
const fn2 = () => {
    return true;
}
console.log(fn2);

// -----------------------------------------------
const Heading3 = () => (
    <h1 className="heading"
        tabIndex="1">
        React Lover using Arrow Function. 🚀
    </h1>
);

console.log(Heading3);

// ------------------------------------------------------
const Heading4 = function () {
    return (
        <h1 className="heading"
            tabIndex="1">
            React Lover using Normal Function 🚀
        </h1>
    )
};
console.log(Heading4);

//React Element

const ReactElement = (
    <span>
        I'm a React Element 🚀
    </span>
)

const HeadingElement2 = (
    <h1 className="heading"
        tabIndex="1">
        {ReactElement}
        React Lover using React Element 🚀
    </h1>);
console.log(HeadingElement2);

// Majorly we have used this syntax
const num = 12345;
const HeadingComponent = () => {
    return (
        <div id="container">
            {/* You can use React Component under JSX   */}
            {/* component composition -> Composing two component into one another i.e <Heading3 /> */}
            {/* Also there is no limit for the no of times you want to use it gives the same result at the no of times you do it.  */}
            <Heading3 />
            <Heading3 />
            <Heading3 />
            {/* You can also write like this  */}
            <Heading3></Heading3>  {/* <Heading3 /> or <Heading3></Heading3> or {Heading3} these three things gives the same result  */}
            {/* You can call a function under JSX  */}
            {Heading3()}   { /*Function call  */}
            <Heading4 />
            {/* You can inject any JavaScript code under JSX  */}
            <h2>{num}</h2>
            <h1>{2 + 3}</h1>
            {/* You can use React Element under JSX   */}
            {HeadingElement2}
            <h1 className="header">
                React Lover Functional Component 🚀
            </h1>
            <p className="para">
                This is a Testing process please calm down 🚀
            </p>
        </div>
    )
};
console.log(HeadingComponent);

const HeadingElement = (
    <>
        <HeadingComponent />
        <h1 className="heading"
            tabIndex="1">
            {ReactElement}
            {/* Note -> Don't put div inside h1 tag not a good practice  */}
            {/* <HeadingComponent /> */}
            React Lover using React Element 🚀
        </h1>
    </>
);
console.log(HeadingElement);

// const HeadingComponent2 = () => (
//     <div id="heading">
//         <h1 className="header2">
//             React Lover Functional Component 🚀
//         </h1>
//     </div>
// );

// console.log(HeadingComponent2);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Note -> We can only render a react element like this but not react component.
// root.render(heading); // can be render ∵ it's a react element.
// root.render(jsxHeading); // can be render ∵ it's a react element.

// root.render(jsxHeading2); // We can't render like this
// root.render(fn); // We can't render like this
// root.render(fn2); // We can't render like this
// root.render(HeadingComponent); // We can't render like this
// root.render(HeadingComponent2); // We can't render like this

// All the react component are render like the following
// root.render(<HeadingComponent />);
root.render(HeadingElement); //can be render a react component under react element