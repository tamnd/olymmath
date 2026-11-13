---
tag: E9FFV62DV9
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Multiply the consecutive natural numbers from 1 to 25, which is $1 \times 2 \times 3 \times \ldots \times 25$, denoted as 25! (read as 25 factorial). When 25! is divided by 3, it is clear that 25! is divisible by 3, resulting in a quotient: then divide this quotient by 3, ..., and continue dividing by 3 until the quotient is no longer divisible by 3. In this process, 3 divides 25! a total of times.
