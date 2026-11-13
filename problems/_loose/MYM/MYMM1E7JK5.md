---
tag: MYMM1E7JK5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For two countries, Normaland and Mirrorland, and their networks of railway lines, the following assumptions are made:

(1) Each city $X$ in Normaland has exactly one partner city $X^{\prime}$ in Mirrorland. It follows: For every city $Y^{\prime}$ in Mirrorland, there is exactly one city in Normaland whose partner city is $Y^{\prime}$.

(2) Each railway line in Normaland represents a direct connection between two cities and does not touch any other city. The same statement applies to Mirrorland.

(3) For any two cities $A, B$ in Normaland and their partner cities $A^{\prime}, B^{\prime}$ in Mirrorland: Either there is a direct railway connection between $A$ and $B$, but not between $A^{\prime}$ and $B^{\prime}$, or there is a direct railway connection between $A^{\prime}$ and $B^{\prime}$, but not between $A$ and $B$.

(4) In Normaland, there are two cities $P, Q$ that are located in such a way in the railway network that one must change trains at least twice to travel from $P$ to $Q$.

Prove that from these assumptions (1) to (4) it follows: In Mirrorland, one can travel from any city to any other city without having to change trains more than twice.
