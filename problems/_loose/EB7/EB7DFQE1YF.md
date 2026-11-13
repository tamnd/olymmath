---
tag: EB7DFQE1YF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ be distinct positive integers. Initially, there are no numbers on the blackboard, and numbers are written on the blackboard according to the following rules:
(1) If there is at least one pair of equal numbers on the blackboard, choose such a pair, add $a$ to one of the numbers, and add $b$ to the other number;
(2) If there are no equal numbers on the blackboard, write two 0s on the blackboard.

Prove: Regardless of how operation (1) is chosen, operation (2) only occurs a finite number of times.
