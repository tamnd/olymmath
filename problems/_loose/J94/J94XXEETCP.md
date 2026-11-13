---
tag: J94XXEETCP
kind: problem
type: answer
answer: "70"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For example, 312 players participate in a table tennis round-robin tournament, where each pair of players competes in one match. If player $A_{i}$ beats $A_{j}$, $A_{j}$ beats $A_{k}$, and $A_{k}$ beats $A_{i}$, then $\left\{A_{i}, A_{j}, A_{k}\right\}$ is called a triangle. Let $L_{i}, W_{i}$ represent the number of wins and losses for player $A_{i}$. It is known that if $A_{i}$ beats $A_{j}$, then $L_{i} + W_{j} \geqslant 10$. Try to find the number of triangles in this round-robin tournament.
