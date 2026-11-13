---
tag: RHRGYJBHSM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n$ be a positive integer, and let $ M=\left\{ 1,2,...,n\right\}$. Two players take turns at the following game: Each player, at his turn, has to select an element of $ M$ and remove all divisors of this element (including this element itself) from the set $ M$.
**a)** Assume that the player who cannot move anymore (because the set $ M$ is empty when it's his move) wins. For which values of $ n$ does the first player have a winning strategy?
**b)** Assume that the player who cannot move anymore (because the set $ M$ is empty when it's his move) loses. For which values of $ n$ does the first player have a winning strategy?
