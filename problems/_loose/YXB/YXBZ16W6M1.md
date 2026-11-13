---
tag: YXBZ16W6M1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the hexagon $A_{1} A_{2} A_{3} A_{4} A_{5} A_{6}$, each vertex is initially labeled with the integer 0. Now, the following two operations are allowed:
(i) Choose any two adjacent vertices, add 2 to the number on one vertex, and subtract 3 from the number on the other vertex;
(ii) Choose any vertex, and multiply the number on that vertex by 6.
Can the numbers on the vertices $A_{1}, A_{2}, A_{3}, A_{4}, A_{5}, A_{6}$ be made to be exactly $1,2,3,4,5,6$ respectively through a series of operations?
