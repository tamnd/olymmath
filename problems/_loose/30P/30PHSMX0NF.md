---
tag: 30PHSMX0NF
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $P$ is called *level* if it has integer coefficients and satisfies $P\left(0\right)=P\left(2\right)=P\left(5\right)=P\left(6\right)=30$. What is the largest positive integer $d$ such that for any level polynomial $P$, $d$ is a divisor of $P\left(n\right)$ for all integers $n$?

$\text{(A) }1 \text{(B) }2 \text{(C) }3 \text{(D) }6 \text{(E) }10$
