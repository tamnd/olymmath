---
tag: M6YP2G3JTX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  1
    url: https://artofproblemsolving.com/community/c6h2046321
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61106
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  1
---
Let $n$ be a positive integer not divisible by $3$ . A triangular grid of length $n$ is obtained by dissecting a regular triangle with length $n$ into $n^2$ unit regular triangles. There is an orange at each vertex of the grid, which sums up to
$$\frac{(n+1)(n+2)}{2}$$
oranges. A triple of oranges $A,B,C$ is *good* if each $AB,AC$ is some side of some unit regular triangles, and $\angle BAC = 120^{\circ}$ . Each time, Yen can take away a good triple of oranges from the grid. Determine the maximum number of oranges Yen can take.
