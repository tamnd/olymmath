---
tag: 9F7MX5DPRW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's play a game: we start with a pile of 2013 tokens. We remove one token, then split the pile into two smaller piles (not necessarily equal). At each step, we remove one token from one of the piles and split one pile into two (not necessarily the same). The goal of the game is to reach a configuration where all piles are 3 tokens high. Is this possible? (If we remove a token from a pile of 1 token, we consider it to be a pile of 0 tokens)
