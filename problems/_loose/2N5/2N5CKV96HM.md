---
tag: 2N5CKV96HM
kind: problem
type: answer
answer: (1,-1)(1,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Problem 3B - 321043B}

Determine all integers $a, b$ for which the division of the polynomial

$$
f(x)=x^{4}+2 a x^{3}+2 x^{2}+x-2
$$

by the polynomial

$$
g(x)=x^{2}+a x+b
$$

results in a polynomial $h(x)$ with no remainder (such that for every number $x$ for which $g(x) \neq 0$, the equation $f(x): g(x)=h(x)$ holds).
