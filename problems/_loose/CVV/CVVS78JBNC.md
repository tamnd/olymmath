---
tag: CVVS78JBNC
kind: problem
type: answer
answer: "3810"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let N be a positive integer greater than 2. We number the vertices
of a regular 2n-gon clockwise with the numbers 1, 2, . . . ,N,-N,-N +
1, . . . ,-2,-1. Then we proceed to mark the vertices in the following way.
In the first step we mark the vertex 1. If ni is the vertex marked in the
i-th step, in the i+1-th step we mark the vertex that is |ni| vertices away
from vertex ni, counting clockwise if ni is positive and counter-clockwise
if ni is negative. This procedure is repeated till we reach a vertex that has
already been marked. Let $f(N)$ be the number of non-marked vertices.
(a) If $f(N) = 0$, prove that 2N + 1 is a prime number.
(b) Compute $f(1997)$.
