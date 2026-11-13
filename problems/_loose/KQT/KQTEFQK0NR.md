---
tag: KQTEFQK0NR
kind: problem
type: answer
answer: (4, 4, 4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps
    source: hf-mathnet
    label: Czech-Polish-Slovak Mathematical Match Czech-Slovak-Polish Match
---
Determine all triples $(a, b, c)$ of positive real numbers satisfying the following system of equations
$$
\begin{aligned}
a\sqrt{b} - c &= a, \\
b\sqrt{c} - a &= b, \\
c\sqrt{a} - b &= c.
\end{aligned}
$$
