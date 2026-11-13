---
tag: 9QVMEH1F46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the beginning, the grasshopper is at the origin of the number line, at number 0, and then it jumps in the same direction. For a natural number $k$, the grasshopper reaches number 1 in its first jump, and each subsequent jump is exactly $k$ times longer than the previous one. At the position of every multiple of 2015, there is a hole.

Determine all natural numbers $k$ such that the grasshopper can jump 2015 times without falling into a hole.
