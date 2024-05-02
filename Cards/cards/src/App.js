/* kapsayacı component appjs child component ise course.js */
import "./App.css";
import Course from './Course';
import Angular from './images/angular.jpg';
import Boostrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';
/* props olarak course componentlere göndereceğiz */

function App() {
  return (
    <div className="App">
      {/* <img src={Angular} alt=""/> */}
      <Course /* Course component */
        image={Angular} /* Yukarıda tanımlanmış bir değişkeni importu vermek isteğimde jsx formatında süslü parantezler kulllanır. . */
        title="Angular"/* Yukarıda tanımlanmamışsa bu şekilde tırnak  */
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
       image={Boostrap}
        title="Boostrap 5"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
       image={Csharp}
        title="Komple Web"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
       image={Kompleweb}
        title="FrontEnd"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
    </div>
  );
}

export default App;
