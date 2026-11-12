---
tag: MRQ5A6T7MC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, there are 100 natural numbers, among which exactly 33 are odd. Every minute, the sum of all pairwise products of all the numbers already on the board is added (for example, if the numbers 1, 2, 3, 3 were on the board, the next move would add the number $1 \cdot 2 + 1 \cdot 3 + 1 \cdot 3 + 2 \cdot 3 + 2 \cdot 3 + 3 \cdot 3$). Can it be asserted that sooner or later a number divisible by $2^{10000000}$ will appear on the board? (I. Bogdanov)
