---
tag: WTXQG032GH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A and B play a game. A first writes a positive integer $n$ on the blackboard, then B starts, and the two take turns to operate. Each time it's B's turn, B chooses a positive integer $b$, and replaces the number $n$ on the blackboard with $n-b^{2}$; each time it's A's turn, A chooses a positive integer $k$, and replaces the number $n$ on the blackboard with $n^{k}$. If the number 0 appears on the blackboard, B wins. Question: Can A prevent B from winning?
