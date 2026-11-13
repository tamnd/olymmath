---
tag: 97W1QVGQRT
kind: problem
type: answer
answer: C_{n-(k-1)(-1)}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$1: 36$ Find the number of combinations of $k$ different elements $\left(j_{1}, j_{2}, \cdots, j_{k}\right)$ taken from $\{1,2, \cdots, n\}$ that satisfy the following conditions:
(1) $1 \leqslant j_{1}<j_{2}<\cdots<j_{k} \leqslant n$;
(2) $j_{i}-j_{i-1} \geqslant m, i=2,3, \cdots, k, m \in N$.
