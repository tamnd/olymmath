---
tag: HR6S4GZ2YA
kind: problem
type: answer
answer: a_{n}=[n\alpha]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
"Sieve" the sequence $\left\{a_{n}\right\}$ from the set of natural numbers $\mathbf{N}$: Let $a_{1}=1$, remove $b_{1}=$ $a_{1}+k$, where $k$ is some natural number; then take $a_{2}$ as the smallest number in $\mathbf{N}$ except for $a_{1}, b_{1}$, remove $b_{2}=a_{2}+2 k$; take $a_{3}$ as the smallest number in $\mathbf{N}$ except for $a_{1}, a_{2}, b_{1}, b_{2}$, remove $b_{3}=a_{3}+3 k$, and so on, to obtain the sequence $\left\{a_{n}\right\}$, find the expression for $a_{n}$.
