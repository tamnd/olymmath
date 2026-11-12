---
tag: 9MCDC2N0WQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three printing machines. The first, given a card with numbers $a$ and $b$, issues a card with numbers $a+1$ and $b+1$; the second, given a card with even numbers $a$ and $b$, issues a card with numbers $a / 2$ and $b / 2$; the third machine, given a pair of cards with numbers $a, b$ and $b, c$, issues a card with numbers $a$, c. All machines return the cards inserted into them. Is it possible to obtain a card $(1,1988)$ from a card $(5,19)$ using these machines?
