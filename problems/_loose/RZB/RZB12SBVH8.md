---
tag: RZB12SBVH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. The Georgian folk dance team consists of $2n$ dancers, with $n$ males and $n$ females. Each dancer, both male and female, is assigned a number from 1 to $n$. During one of their dances, all the dancers line up in a single line. Their wish is that, for every integer $k$ from 1 to $n$, there are exactly $k$ dancers positioned between the $k$th numbered male and the $k$th numbered female. Prove the following statements:

a) If $n \equiv 1 \text{ or } 2 \mod{4}$, then the dancers cannot fulfill their wish.
b) If $n \equiv 0 \text{ or } 3 \mod{4}$, then the dancers can fulfill their wish.

*Proposed by Giorgi Arabidze, Georgia*
