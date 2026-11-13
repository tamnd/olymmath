---
tag: A7QHWVG8QS
kind: problem
type: answer
answer: 5^{50}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial

$$
\left(x^{2}+5 x-19\right)^{50}=a_{0}+a_{1} x+a_{2} x^{2}+\cdots+a_{100} x^{100},
$$

consider the quantity

$$
M=a_{0}-a_{1}+4 a_{2}-9 a_{3}+16 a_{4}-81 a_{5}+64 a_{6}-729 a_{7}+\cdots+2^{98} a_{98}-3^{98} a_{99}+2^{100} a_{100}
$$

where the coefficient of $a_{2 k}$ is $2^{2 k}$ and the coefficient of $a_{2 k+1}$ is $-3^{2 k}$. What is the highest power of 5 that divides $M$?
(A) $5^{0}$
(B) $5^{1}$
(C) $5^{5}$
(D) $5^{50}$
(E) $5^{100}$
