---
tag: 8ZF8QM0Z9Q
kind: problem
type: answer
answer: "1972"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider the following sequence of sets of (natural) numbers. The first set $I_{0}$ consists of
two ones 1,1. Then we insert their sum $1+1=2$ between these numbers; we get the set $I_{1}: 1,2,1$. Next, between every two numbers in the set $I_{1}$, we insert the sum of these numbers; we get the set $I_{2}: 1,3,2,3,1 ;$ then, proceeding in the same way with the set $I_{2}$, we arrive at the set $I_{3}: 1,4,3,5,2,5,3,4,1$, and so on. How many times will the number 1973 appear in the millionth set $I_{1000000}$?
