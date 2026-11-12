---
tag: FCF6SE5MTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Philippine MO
    url: https://artofproblemsolving.com/community/c6h3523878
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo/2025
    source: hf-ai-mo-aops
    label: 2025 Philippine MO
---
An ant is on the Cartesian plane. In a single move, the ant selects a positive integer $k$ , then either travels

- $k$ units vertically (up or down) and $2k$ units horizontally (left or right); or
- $k$ units horizontally (left or right) and $2k$ units vertically (up or down).

Thus, for any $k$ , the ant can choose to go to one of eight possible points. Prove that, for any integers $a$ and $b$ , the ant can travel from $(0, 0)$ to $(a, b)$ using at most $3$ moves.
