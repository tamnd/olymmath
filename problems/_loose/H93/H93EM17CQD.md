---
tag: H93EM17CQD
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest odd integer $n \ge 3$, for which there exist $n$ rational numbers $x_1 , x_2 , . . . , x_n$ with the following properties:

$(a)$ $$\sum_{i=1}^{n} x_i =0 , \ \sum_{i=1}^{n} x_i^2 = 1.$$

$(b)$ $$x_i \cdot x_j \ge - \frac 1n \ \forall \ 1 \le i,j \le n.$$
