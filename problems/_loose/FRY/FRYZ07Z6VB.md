---
tag: FRYZ07Z6VB
kind: problem
type: answer
answer: "35"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random number sensor outputs a number $a$ - one of the natural numbers $1,2, \ldots, 100$ (with equal probability). For this value of $a$, we find the maximum possible value $M$ of the function

$$
f(x)=\frac{700}{x^{2}-2 x+2 a}
$$

The probability that $M>10$ is $n$ percent. What is $n$?
