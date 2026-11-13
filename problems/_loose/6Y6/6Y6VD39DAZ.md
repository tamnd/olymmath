---
tag: 6Y6VD39DAZ
kind: problem
type: answer
answer: \frac{2n(n-1)}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set of $n$ points in the plane such that no three points of $S$ are ever on the same line. Show that the number of triangles of area 1 whose three vertices are in $S$ is at most:

$$
\frac{2 n(n-1)}{3}
$$
