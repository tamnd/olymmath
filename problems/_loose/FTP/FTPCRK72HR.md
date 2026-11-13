---
tag: FTPCRK72HR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a 2018 piles of tokens. On the $i$-th pile, there are $p_{i}$ tokens, where $p_{i}$ is the $i$-th prime number. We are allowed to:

- split a pile into two others and add a token to one of the two newly created piles.
- merge two piles and add a token to the newly created pile.

Can we end up with the situation of 2018 piles of 2018 tokens each?
