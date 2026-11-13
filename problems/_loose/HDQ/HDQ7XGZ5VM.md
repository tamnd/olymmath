---
tag: HDQ7XGZ5VM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3056182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26666
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
All the divisors of a) $8\cdot 10^6$ and b) $360^{10}$ are written on a board. At a move, we can take two numbers, neither of which is divisible by the other, and replace them with their greatest common divisor and lowest common multiple. At some point, we will no longer be able to perform new operations. How many different numbers will be on the board at this moment?

*Proposed by V. Bragin*
