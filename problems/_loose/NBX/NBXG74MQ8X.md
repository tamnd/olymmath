---
tag: NBXG74MQ8X
kind: problem
type: answer
answer: \frac{1}{4}n^{2}(n-1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any natural number $n \geq 2$, let $2 n$ points $P_{1}, \ldots, P_{2 n}$ be arranged in space such that no four of these points lie on the same plane.

Let $T$ denote the set of all tetrahedra whose four vertices belong to the set $M=$ $\left\{P_{1}, \ldots, P_{2 n}\right\}$.

For every plane $\epsilon$ that does not contain any point of $M$, let $t_{\epsilon}$ be the number of all those tetrahedra from $T$ that have a quadrilateral as a common intersection with $\epsilon$.

Determine, for every natural number $n \geq 2$, the largest possible value that $t_{\epsilon}$ can take!
