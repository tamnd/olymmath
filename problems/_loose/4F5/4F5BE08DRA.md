---
tag: 4F5BE08DRA
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cubes of size $1 \times 1 \times 1$ are glued together to form a cube of size $3 \times 3 \times 3$. What is the maximum number of cubes that can be removed from it so that the remaining figure has the following two properties:

- from the side of each face of the original cube, the figure looks like a $3 \times 3$ square (looking perpendicularly at this face, we do not see any gaps - 9 cubes of the figure are visible);
- by moving from cube to cube through their common face, one can get from any cube to any other within the figure?
