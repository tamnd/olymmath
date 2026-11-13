---
tag: 1YXQMQJYN0
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two positive real numbers $a, b$ we define

$$
a \star b=\frac{a b+1}{a+b}
$$

What is the value of $1 \star(2 \star(3 \star(\cdots(2017 \star 2018))))$ ?
(A) $1 / 2018$
(B) 1
(C) $2018 / 2017$
(D) 1009
(E) 2018
