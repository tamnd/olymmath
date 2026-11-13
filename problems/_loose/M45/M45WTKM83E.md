---
tag: M45WTKM83E
kind: problem
type: answer
answer: "144"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider 7 islands $A_{1}, \ldots, A_{7}$. We are allowed to build bridges, either between an island $A_{i}$ and the next island $A_{i+1}$ (for $i \in\{1,2, \ldots, 6\}$), or between an island $A_{i}$ and the last island $A_{7}$ (for $i \in\{1,2, \ldots, 6\}$). In how many ways can these constructions be carried out with the minimum number of bridges so that one can travel from any island to any other?

Example for 3 islands instead of 7: the three possible constructions using two bridges are

1) a bridge between $A_{1}$ and $A_{2}$, and a bridge between $A_{1}$ and $A_{3}$
2) a bridge between $A_{1}$ and $A_{2}$, and a bridge between $A_{2}$ and $A_{3}$
3) a bridge between $A_{1}$ and $A_{3}$, and a bridge between $A_{2}$ and $A_{3}$.
