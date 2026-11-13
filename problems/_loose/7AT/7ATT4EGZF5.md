---
tag: 7ATT4EGZF5
kind: problem
type: answer
answer: "3015"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is given that the sequence $\left(a_{n}\right)_{n=1}^{\infty}$, with $a_{1}=a_{2}=2$, is given by the recurrence relation
$$
\frac{2 a_{n-1} a_{n}}{a_{n-1} a_{n+1}-a_{n}^{2}}=n^{3}-n
$$
for all $n=2,3,4, \ldots$. Find the integer that is closest to the value of $\sum_{k=2}^{2011} \frac{a_{k+1}}{a_{k}}$.
