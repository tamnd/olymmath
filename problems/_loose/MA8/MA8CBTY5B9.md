---
tag: MA8CBTY5B9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table lie $k$ piles with $1,2,3, \ldots, k$ stones, $k \geq 3$. In each step, we select any three piles on the table, merge them into one, and add one new stone that did not lie on the table before. If after several steps a single pile is formed, the final number of stones is not divisible by three. Prove it.
