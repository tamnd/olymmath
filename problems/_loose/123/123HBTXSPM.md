---
tag: 123HBTXSPM
kind: problem
type: answer
answer: 2^iwithi\geq1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85367
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of positive integers $a_{0}, a_{1}, a_{2}, \ldots$ is defined by $a_{0}=3$ and

$$
a_{n+1}-a_{n}=n\left(a_{n}-1\right)
$$

for all $n \geq 0$. Determine all integers $m \geq 2$ for which $\operatorname{gcd}\left(m, a_{n}\right)=1$ for all $n \geq 0$.
