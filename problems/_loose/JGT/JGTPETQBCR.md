---
tag: JGTPETQBCR
kind: problem
type: answer
answer: k\leqslant2n-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$ be an integer and $k \geqslant 1$ be an integer. Arthur and Thomas play the following game. Arthur chooses two sets of natural numbers, $A$ and $B$, of cardinality $n$, and $k$ integers $x_{1}, \ldots, x_{k}$ (not necessarily distinct) that can be written as the product of an element of $A$ and an element of $B$. Thomas wins if he can choose three indices $i_{1}, i_{2}, i_{3}$ pairwise distinct such that $x_{i_{1}}$ divides $x_{i_{2}} x_{i_{3}}$. For which values of $k$, in terms of $n$, does Arthur have a winning strategy?
