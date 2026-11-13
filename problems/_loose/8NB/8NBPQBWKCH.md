---
tag: 8NBPQBWKCH
kind: problem
type: answer
answer: "12114"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of 2019 numbers $a_{1}, a_{2}, a_{3}, \ldots, a_{2019}$ is given. It is known that for any 4 consecutive terms of the sequence, their sum is constant. Similarly, for any two consecutive numbers, their absolute difference is constant (i.e., $\left|a_{1}-a_{2}\right|=\left|a_{2}-a_{3}\right|=\left|a_{3}-a_{4}\right|=\ldots$ ).

It is also known that $a_{1}<a_{2}<a_{3}$ and that $a_{2}=6$. What is the sum of all the numbers in the sequence?
(A) 2019
(B) 2020
(C) 4038
(D) 12114
(E) The data is insufficient to determine it
