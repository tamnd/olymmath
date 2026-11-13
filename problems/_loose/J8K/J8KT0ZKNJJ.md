---
tag: J8KT0ZKNJJ
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial $p(x)=x(x+1)(x-2)^{2}$, consider the polynomial $q(x)=p(p(p(\ldots(p(x)) \ldots)))$ given by the composition of $p(x)$ with itself 2024 times. How many integers $k$ are there such that $q(k)=0 ?$
(A) 1
(B) 3
(C) 4
(D) 5
(E) 6
