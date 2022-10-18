import React from "react";
import cube from "../../Img/Shapes/volume-cube.png";
import cuboid from "../../Img/Shapes/volume-cuboid.png";

import "../MajorComponents/Mid.css";

const AltheoryMidContent1 = () => {


  return (
    <div className="overflow-auto scrollbar-primary" style={{ height: "100%" }}>

      <div className="my-5" style={{ width: "93%" }}>
        <h6 className="">Objective</h6>
        <ul>
          To verify the algebraic identity :(a + b)³ = a³ + b³ + 3a²b + 3ab².
        </ul>
        <h6>Pre-requisite Knowledge</h6>
        <ul>
          <li>Concept of cube.</li>
          <li>Concept of cuboid.</li>
          <li>Addition of terms.</li>
          <li>Multipication of numbers.</li>
          <li>Prior knowledge of volume of cube/cuboids.</li>
        </ul>
        <h6>Concept</h6>
        <ul>
          <li>An Algebric Identity is an equality, which is true for all the values of the variables in the equality. They are also used for the factorization of polynomials.
            The algebraic equations which are valid for all values of variables in them are called algebraic identities.
          </li>
          <li>In this way, algebraic identities are used in the computation of algebraic exptressions and solving different polynomials.</li>

        </ul>
        <h6>Cube</h6>
        <ul>
          A cube is a region of space formed by six identical square faces joined along their edges. Three edges join at each corner to form a vertex.

        </ul>
        <h6>Volume of Cube</h6>
        <ul>
          <li>
          The volume of the cube is the space contained in it. Suppose, if an object is in cubical shape and we need to immerse  any material in it, say water, then measure of water in litres to be kept in the object is calculated by its volume. 
          </li>
          <li> The formula of the volume is given by : Volume of cube = (side)³ (cubic unit)</li>
          <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={cube}
          alt="img"
        />
        </ul>

        <h6>Cuboid</h6>
      <ul>
      A cuboid is a 3-D shape with sides that are rectangular. Cuboids have six surface and twelve edges. Objects that are cuboid include books, match-boxes and shoe-boxes. If a cuboid has faces that are all square it is a cube. All the angles of cuboid are right angles.

      </ul>
<h6>Volume of Cuboid</h6>
<ul>
  <li>Volume of cuboid is the total spaces occupied by the cuboid in a three dimensional space. A cuboid is a three-dimensional structure having six rectangular faces. These six faces of the cuboid exist as a pair of three parallel faces.</li>
  <li>Therefore, the volume is a measure based on the dimensions of these faces, i.e. length, width and height.</li>
  <li>Volume of cubiod =  length * width * height (cubic unit)</li>
  <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={cuboid}
          alt="img"
        />
</ul>
       

      </div>


    </div>
  );
};

export default AltheoryMidContent1;
