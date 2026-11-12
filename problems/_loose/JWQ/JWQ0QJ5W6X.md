---
tag: JWQ0QJ5W6X
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will build a sequence of numbers in the following way. We will place the number 7 in the first position, and after each number, we will place the sum of the digits of its square, increased by one. For example, the second position will hold the number 14, since $7^{2}=49$, and $4+9+1=14$. The third position will hold the number 17, since $14^{2}=196$, and $1+9+6+1=17$, and so on. What number stands in the 2016th position?
