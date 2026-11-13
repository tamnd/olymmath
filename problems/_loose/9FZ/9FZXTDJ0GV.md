---
tag: 9FZXTDJ0GV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a number $N$, all of its digits are non-zero. If there are two adjacent identical digits, or two adjacent identical two-digit numbers, they can be deleted. Additionally, two identical digits or two identical two-digit numbers can be inserted at any position. Prove: By comprehensively applying these steps, a number less than $10^{9}$ with all distinct digits can be obtained from the number $N$.
(39th Moscow Mathematical Olympiad, 1976)
