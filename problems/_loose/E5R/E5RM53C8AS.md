---
tag: E5RM53C8AS
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of all even natural numbers $n$ for which the number of divisors (including 1 and $n$ itself) is equal to $\frac{n}{2}$. (For example, the number 12 has 6 divisors: $1,2,3,4,6,12$.)
