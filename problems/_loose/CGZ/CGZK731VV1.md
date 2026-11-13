---
tag: CGZK731VV1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a rectangle consisting of unit squares. All vertices of these unit squares inside the rectangle and on its sides have been colored in four colors. Additionally, it is known that:

- every vertex that lies on the side $AB$ has been colored in either the $1.$ or $2.$ color;

- every vertex that lies on the side $BC$ has been colored in either the $2.$ or $3.$ color;

- every vertex that lies on the side $CD$ has been colored in either the $3.$ or $4.$ color;

- every vertex that lies on the side $DA$ has been colored in either the $4.$ or $1.$ color;

- no two neighboring vertices have been colored in $1.$ and $3.$ color;

- no two neighboring vertices have been colored in $2.$ and $4.$ color.

Notice that the constraints imply that vertex $A$ has been colored in $1.$ color etc. Prove that there exists a unit square that has all vertices in different colors (in other words it has one vertex of each color).
