---
tag: AS1DYVK97E
kind: problem
type: answer
answer: 2n-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n(n>3)$ football teams have played $k$ matches, with each pair of teams playing at most one match, and there are no ties. It is found that among all the teams, exactly one team remains undefeated, and for any two teams $A, B$, there exists another team $C$, such that either $A$ beats $C$ and $B$ beats $C$, or $C$ beats $A$ and $C$ beats $B$. Try to find the minimum possible value of $k$.
