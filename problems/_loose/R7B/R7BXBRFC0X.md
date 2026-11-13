---
tag: R7BXBRFC0X
kind: problem
type: answer
answer: 2^{k}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n \geq 2$ such that for all integers $0 \leq i, j \leq n$:

$$
i+j \equiv\binom{n}{i}+\binom{n}{j} (\bmod 2)
$$
