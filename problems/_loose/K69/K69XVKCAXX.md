---
tag: K69XVKCAXX
kind: problem
type: answer
answer: 1-\frac{1}{n}<a_{n}<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Consider the sequence $a_{0}, a_{1}, a_{2}, \cdots, a_{n}$ defined by $a_{0}=\frac{1}{2}$ and by

$$
a_{k}=a_{k-1}+\frac{a_{k-1}^{2}}{n}
$$

for all $1 \leqslant k \leqslant n$. Show that $1-\frac{1}{n}<a_{n}<1$.
