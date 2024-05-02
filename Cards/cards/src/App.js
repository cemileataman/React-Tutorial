/* kapsayacı component appjs child component ise course.js */
import "./App.css";
import Course from './Course';

function App() {
  return (
    <div className="App">
      <Course /* Course component */
        title="Angular"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
        title="Boostrap 5"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
        title="Komple Web"
        description="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quam accusantium corporis modi dicta minus voluptatibus possimus? 
    Ratione hic laudantium dicta nemo, eum totam. 
   Expedita corrupti debitis iusto enim ullam non?"/* key,value değeri bunlar birer objedir. */
      />
       <Course
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
