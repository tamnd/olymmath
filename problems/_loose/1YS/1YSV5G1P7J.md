---
tag: 1YSV5G1P7J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be in $\mathbb{N}^{*}$. In a tournament among $n$ players, each pair plays against each other exactly once. We say that the tournament is $k$-undecided if for every set $A$ of $k$ players, there exists a player who has beaten all those in $A$.

Show that for every $k$, there exists a $k$-undecided tournament with more than $k$ players.
