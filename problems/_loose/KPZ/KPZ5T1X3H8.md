---
tag: KPZ5T1X3H8
kind: problem
type: answer
answer: 2^{n-1}(AB+AC)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The side $BC$ of triangle $ABC$ with points $M_{0}=B, M_{1}, M_{2}, \ldots, M_{n-1}$, $M_{n}=C$ is divided into $n$ segments, and from these points, segments parallel to sides $AC$ and $AB$ are constructed respectively.

a) In how many different ways can one reach point $M_{k}(k=0,1,2, \ldots, n)$ from point $A$ along the resulting grid, if movement is allowed in the direction of vector $\overrightarrow{A B}$ and in the direction of vector $\overrightarrow{A C}$.

b) Determine the number of the above described paths that lead from point $A$ to all points $M_{0}, M_{1}, \ldots, M_{n}$.

c) If the points $M_{0}, M_{1}, \ldots, M_{n}$ are equidistant, determine the sum of the lengths of all paths $A M_{k}$.
