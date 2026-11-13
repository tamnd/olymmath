---
tag: 6W6XVPH4T6
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n \geq 1$, we define the recursive relation given by
$$
a_{n+1}=\frac{1}{1+a_{n}} \text {. }
$$

Suppose that $a_{1}=a_{2012}$. Find the sum of the squares of all possible values of $a_{1}$.
