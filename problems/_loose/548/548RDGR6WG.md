---
tag: 548RDGR6WG
kind: problem
type: answer
answer: "142857"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to determine all six-digit numbers $p$ with the following properties:
(1) $p, 2p, 3p, 4p, 5p, 6p$ are still six-digit numbers;
(2) the six digits of each six-digit number are still the six digits of the number $p$ (only the order of arrangement is different).
