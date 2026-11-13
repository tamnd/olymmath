---
tag: 3Z3HVHNCF7
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $n$ for which there exist positive integers $a_{1}, a_{2}, \ldots, a_{n}$ such that

$$
a_{1}+2 a_{2}+3 a_{3}+\ldots+n a_{n}=6 n
$$

and

$$
\frac{1}{a_{1}}+\frac{2}{a_{2}}+\frac{3}{a_{3}}+\ldots+\frac{n}{a_{n}}=2+\frac{1}{n}
$$
