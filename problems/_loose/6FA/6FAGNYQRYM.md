---
tag: 6FAGNYQRYM
kind: problem
type: answer
answer: 2\cdotC_{n+1}^{r}-C_{n+2-2r}^{r}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136876
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$S=\{1,2, \cdots, n\}$ of $m(\geqslant 2)$ $r$-element subsets $A_{1}, A_{2}, \cdots, A_{m}$, have the property that for each $A_{i}(1 \leqslant i \leqslant m)$, there is an $A_{j}(1 \leqslant j \leqslant m, j \neq i)$. Either the maximum element of $A_{i}$ is the minimum element of $A_{j}$, or the minimum element of $A_{i}$ is the maximum element of $A_{j}$. Try to find:
(1) The values that $r$ can take (when $n$ is fixed).
(2) The maximum possible value of $m$ (when $n$ and $r$ are fixed).
