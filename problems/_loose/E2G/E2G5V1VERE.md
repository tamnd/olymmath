---
tag: E2G5V1VERE
kind: problem
type: answer
answer: n^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the sum of the numbers in the adjacent table?
(A) $\left(\frac{n(n+1)}{2}\right)^{2}$
(B) $n+\frac{n(n+1)^{2}}{2}$
(C) $n^{3}+n^{2}+n+1$
(D) $n(2 n-1)(n+1)$
(E) $n^{3}$.

| 1 | 2 | 3 | $\cdots$ | $n$ |
| :---: | :---: | :---: | :---: | :---: |
| 2 | 3 | 4 | $\cdots$ | $n+1$ |
| 3 | 4 | 5 | $\cdots$ | $n+2$ |
| $\cdots$ | $\cdots$ | $\cdots$ | $\cdots$ | $\cdots$ |
| $n$ | $n+1$ | $n+2$ | $\cdots$ | $2 n-1$ |
