---
tag: 5NW4HJ8A4D
kind: problem
type: answer
answer: (n-r)\cdotn^{r-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $1 \leqslant r \leqslant n$, in the ordered tuple $\left(x_{1}, x_{2}, \cdots, x_{r}\right)$ each $x_{j} \in\{1,2, \cdots, n\}$, and for each $i=1$, $2, \cdots, n, x_{1}, x_{2}, \cdots, x_{r}$ contains at most $i-1$ elements $\leqslant i$. Find the number of such $r$-tuples.
