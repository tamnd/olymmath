---
tag: 8HHQAMP8G7
kind: problem
type: answer
answer: "2137"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
For a positive integer $m$, let $S(m)$ denote the positive integer whose decimal representation is equal to the octal representation of $m$. For example, $S(64) = 100$, $S(100) = 144$, $S(2023) = 3747$. Two positive integers $x, y$ satisfy the relation
$$
\frac{S(x) + S(1)}{S(x + 1)} = \frac{S(y) + S(2023)}{S(y + 2023)} < \frac{8}{10}.
$$
What is the smallest possible value of $y$ if $x < 100$?
