---
tag: 27FASSPSX0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Give are the integers $a_{1}=11 , a_{2}=1111, a_{3}=111111, ... , a_{n}= 1111...111$( with $2n$ digits) with $n > 8$ .
Let $q_{i}= \frac{a_{i}}{11} , i= 1,2,3, ... , n$ the remainder of the division of $a_{i}$ by$ 11$ .
Prove that the sum of nine consecutive quotients: $s_{i}=q_{i}+q_{i+1}+q_{i+2}+ ... +q_{i+8}$ is a multiple of $9$ for any $i= 1,2,3, ... , (n-8)$
