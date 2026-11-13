---
tag: FWWXGNYV4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
12 David and Linus play the following game: David chooses a subset $Q$ of the set $\{1, \ldots, 2018\}$. Then Linus chooses a natural number $a_{1}$ and calculates the numbers $a_{2}, \ldots, a_{2018}$ recursively, where $a_{n+1}$ is the product of the positive divisors of $a_{n}$.

Let $P$ be the set of natural numbers $k \in\{1, \ldots, 2018\}$ for which $a_{k}$ is a square number. Linus wins if $P=Q$. Otherwise David wins. Who has a winning strategy?
