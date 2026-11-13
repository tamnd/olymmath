---
tag: SE2SQMVPP5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A ladder is a non-decreasing sequence $a_1, a_2, \dots, a_{2020}$ of non-negative integers. Diego and Pablo play by turns with the ladder $1, 2, \dots, 2020$, starting with Diego. In each turn, the player replaces an entry $a_i$ by $a_i'<a_i$, with the condition that the sequence remains a ladder. The player who gets $(0, 0, \dots, 0)$ wins. Who has a winning strategy?

*Proposed by Violeta Hernández*
