---
tag: QNJC7QP9CR
kind: problem
type: answer
answer: x_{n}=[\frac{n(n+1)+1}{3}],n\inN
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a_{1}, a_{2}, \cdots, a_{n}$ is a sequence, for each $k, 1 \leqslant k \leqslant n, a_{k} \in$ $\{0,1\}$. If $a_{k}, a_{k+1}$ are the same, let $b_{k}=0$; if $a_{k}, a_{k+1}$ are different, let $b_{k}$ $=1$, thus obtaining a new sequence $b_{1}, b_{2}, \cdots, b_{n-1}, b_{k} \in\{0,1\}$, where $k=1,2$, $\cdots, n-1$. Repeating this operation, a triangular number table composed entirely of the digits 0 and 1 is formed, with the last row containing only one digit. Find the maximum value of the sum of 1s in this triangular number table composed of digits.
