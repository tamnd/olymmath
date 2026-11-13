---
tag: RAXXKYD343
kind: problem
type: answer
answer: a_{n}=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sequences of positive integers $\left\{a_{n}\right\}_{n=1}^{\infty}$, such that $a_{4}=4$ and the identity

$$
\frac{1}{a_{1} a_{2} a_{3}}+\frac{1}{a_{2} a_{3} a_{4}}+\cdots+\frac{1}{a_{n} a_{n+1} a_{n+2}}=\frac{(n+3) a_{n}}{4 a_{n+1} a_{n+2}}
$$

holds true for every positive integer $n \geq 2$.

Peter Boyvalenkov
