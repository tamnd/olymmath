---
tag: 814CMDYKDV
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a plane $\alpha$, if the distances from all vertices of a polyhedron to the plane $\alpha$ are equal, then the plane $\alpha$ is called a "median plane" of the polyhedron.
(1) How many distinct median planes does a tetrahedron have?
(2) How many distinct median planes does a parallelepiped have?
(3) Given four non-coplanar points in three-dimensional space, how many distinct parallelepipeds can be formed using these four points as four of the vertices?
Please provide the answers to the above questions and explain the reasoning.

---

(1) A tetrahedron has 1 distinct median plane.
- **Reasoning**: A tetrahedron has 4 vertices. For a plane to be a median plane, it must be equidistant from all 4 vertices. The only plane that can satisfy this condition is the plane that passes through the centroid of the tetrahedron and is perpendicular to the line segment connecting the centroid to any vertex. This plane is unique, so there is only 1 distinct median plane for a tetrahedron.

(2) A parallelepiped has 3 distinct median planes.
- **Reasoning**: A parallelepiped has 8 vertices. For a plane to be a median plane, it must be equidistant from all 8 vertices. The median planes of a parallelepiped are the planes that bisect the parallelepiped into two equal halves along the three pairs of opposite faces. Each pair of opposite faces defines a unique median plane, so there are 3 distinct median planes for a parallelepiped.

(3) Given four non-coplanar points in three-dimensional space, 3 distinct parallelepipeds can be formed using these four points as four of the vertices.
- **Reasoning**: To form a parallelepiped, we need to choose 4 vertices from the 8 vertices of the parallelepiped. Given 4 non-coplanar points, we can form a parallelepiped by choosing one of the points as a vertex and then choosing the other 3 points as the adjacent vertices. The number of ways to choose 4 points from 8 is given by the combination formula $ \binom{8}{4} $. However, since the points are non-coplanar, we need to consider the specific arrangement of the points. Each set of 4 points can form a unique parallelepiped, and there are 3 distinct ways to choose the 4 points to form a parallelepiped. Therefore, there are 3 distinct parallelepipeds that can be formed.
