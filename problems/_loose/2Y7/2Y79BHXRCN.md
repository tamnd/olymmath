---
tag: 2Y79BHXRCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the plane, we have 16 distinct points, denoted by $A_{i, j}$ for $\mathfrak{i}, \mathrm{j} \in\{1,2,3,4\}$. These points satisfy the following alignment and cocyclicity relations:

$\triangleright$ for all $i \in\{1,2,3,4\}$, the points $A_{i, 1}, A_{i, 2}, A_{i, 3}$, and $A_{i, 4}$ are collinear;

$\triangleright$ for all $j \in\{1,2,3,4\}$, the points $A_{1, j}, A_{2, j}, A_{3, j}$, and $A_{4, j}$ are collinear;

$\triangleright$ the quadrilaterals $A_{1,1} A_{1,2} A_{2,2} A_{2,1}, A_{2,1} A_{2,2} A_{3,2} A_{3,1}, A_{3,1} A_{3,2} A_{4,2} A_{4,1}, A_{1,2} A_{1,3} A_{2,3} A_{2,2}$, $A_{1,3} A_{1,4} A_{2,4} A_{2,3}, A_{1,1} A_{2,2} A_{2,3} A_{1,4}$, and $A_{1,1} A_{2,2} A_{3,2} A_{4,1}$ are cyclic.

Show that the quadrilateral $A_{4,1} A_{3,2} A_{3,3} A_{4,4}$ is also cyclic.

Note: a quadrilateral is said to be cyclic if its four vertices lie on the same circle.
