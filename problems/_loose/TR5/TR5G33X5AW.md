---
tag: TR5G33X5AW
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given vector $\mathbf{u}=\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3} \right)\in\mathbb{R}^3$ and recursively defined sequence of vectors $\{\mathbf{v}_n\}_{n\geq 0}$
$$\mathbf{v}_0 = (1,2,3), \mathbf{v}_n = \mathbf{u}\times\mathbf{v}_{n-1}$$
Evaluate the value of infinite series $\sum_{n=1}^\infty (3,2,1)\cdot \mathbf{v}_{2n}$.
