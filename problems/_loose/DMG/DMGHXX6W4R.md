---
tag: DMGHXX6W4R
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R} \rightarrow \mathbb{R}$ be a function such that

$$
f(x)= \begin{cases}x ; & x \geq 2 \\ f(4-x) ; & 0 \leq x<2 \\ f(x+2) ; & x<0\end{cases}
$$

What is $f(-5)$?
(A) -3
(B) -1
(C) 1
(D) 3
(E) 5

Problems for 3rd grade
