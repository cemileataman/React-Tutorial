/* kapsayacı component appjs child component ise course.js */
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Boostrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
/* props olarak course componentlere göndereceğiz */

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course /* Course component */
                image={
                  Angular
                } /* Yukarıda tanımlanmış bir değişkeni importu vermek isteğimde jsx formatında süslü parantezler kulllanır. . */
                title="Angular" /* Yukarıda tanımlanmamışsa bu şekilde tırnak  */
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?" /* key,value değeri bunlar birer objedir. */
              />
            </div>
            <div className="column">
              <Course /* Course component */
                image={
                  Boostrap
                } /* Yukarıda tanımlanmış bir değişkeni importu vermek isteğimde jsx formatında süslü parantezler kulllanır. . */
                title="Boostrap 5" /* Yukarıda tanımlanmamışsa bu şekilde tırnak  */
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?" /* key,value değeri bunlar birer objedir. */
              />
            </div>
            <div className="column">
              <Course /* Course component */
                image={
                  Csharp
                } /* Yukarıda tanımlanmış bir değişkeni importu vermek isteğimde jsx formatında süslü parantezler kulllanır. . */
                title="Komple Web" /* Yukarıda tanımlanmamışsa bu şekilde tırnak  */
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?" /* key,value değeri bunlar birer objedir. */
              />
            </div>
            <div className="column">
              <Course /* Course component */
                image={
                  Kompleweb
                } /* Yukarıda tanımlanmış bir değişkeni importu vermek isteğimde jsx formatında süslü parantezler kulllanır. . */
                title="FrontEnd" /* Yukarıda tanımlanmamışsa bu şekilde tırnak  */
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?" /* key,value değeri bunlar birer objedir. */
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
