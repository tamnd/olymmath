---
tag: AGH8VSHY5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, 100 cards are placed on the table, each with a natural number written on it; among them, exactly 28 cards have odd numbers. Then, every minute, the following procedure is carried out. For every 12 cards lying on the table, the product of the numbers written on them is calculated, all these products are summed, and the resulting number is written on a new card, which is added to those on the table. Can the initial 100 numbers be chosen such that for any natural number $d$, a card with a number divisible by $2^{d}$ will eventually appear on the table?

(I. Bogdanov)
