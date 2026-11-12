---
tag: DVFFGQ2AQ9
kind: problem
type: answer
answer: \mathrm{P}(A)=\frac{C_{r}^{k}C_{r-k}^{}(i-1)^{}(n-i)^{r-k-}}{n^{r}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ boxes and $r$ balls. The balls are randomly placed into the boxes. Find the probability that the $i$-th box will contain $k$ balls, and the boxes with numbers $1,2, \ldots, i-1$ will contain in total $l$ balls $(k+l \leqslant r)$.
