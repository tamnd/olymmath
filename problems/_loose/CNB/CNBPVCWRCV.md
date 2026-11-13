---
tag: CNBPVCWRCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0, \infty) \longrightarrow[0, \infty)$ be a continuous function, with $f(0)>0$ and with the property that for any $0 \leq x<y$ the inequalities $x-y<f(y)-f(x) \leq 0$ hold. Show that:

a) There exists a unique number $\alpha \in(0, \infty)$ such that $(f \circ f)(\alpha)=\alpha$.

b) The sequence $\left(x_{n}\right)_{n \geq 1}$, defined by $x_{1} \geq 0$ and $x_{n+1}=f\left(x_{n}\right), \forall n \in \mathbb{N}^{*}$, is convergent.
