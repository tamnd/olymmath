---
tag: FBWAJTM75V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ and $r$ are positive integers, and $r \leqslant n$, try to prove the following equations:
(1) $P_{r}^{n}=n P_{r}^{n}$
(2) $P_{r}^{n}=(n-r+1) P_{r}^{n}$,
(3) $P_{r}^{n}=\frac{n}{n-r} P_{r}^{n \cdot '}, r<n$
(4) $P_{r}^{n+1}=P_{r}^{n}+r P_{r-1}^{n}$
(5) $P_{r}^{n+1}=r!+r\left(P_{r, 1}^{n}+P_{r, 1}^{n}+\cdots+P_{r, 1}^{r}\right)$
