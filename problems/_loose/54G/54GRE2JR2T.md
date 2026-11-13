---
tag: 54GRE2JR2T
kind: problem
type: answer
answer: \frac{2}{2n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One chooses a point in the interior of $\triangle A B C$ with area 1 and connects it with the vertices of the triangle. Then one chooses a point in the interior of one of the three new triangles and connects it with its vertices, etc. At any step one chooses a point in the interior of one of the triangles obtained before and connects it with the vertices of this triangle. Prove that after the $n$-th step:
a) $\triangle A B C$ is divided into $2 n+1$ triangles;

б) there are two triangles with common side whose combined area is not less than $\frac{2}{2 n+1}$.

Alexander Ivanov
