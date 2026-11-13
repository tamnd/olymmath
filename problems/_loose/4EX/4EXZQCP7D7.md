---
tag: 4EXZQCP7D7
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the operations: $a \bigcirc b=a^{\log _{7} b}, a \otimes b=a^{\frac{1}{\log ^{6} b}}$, where $a, b \in \mathbf{R}$, and the sequence $\left\{a_{n}\right\}(n \geqslant 4)$ satisfies:
$$
a_{3}=3 \otimes 2, a_{n}=(n \otimes(n-1)) \bigcirc a_{n-1} \text {. }
$$

Then the integer closest to $\log _{7} a_{2019}$ is ( ).
(A) 8
(B) 9
(C) 10
(D) 11
(E) 12
