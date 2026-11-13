---
tag: J32DPXJG32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2020$ positive integers written on a blackboard. Every minute, Zuming erases two of the numbers and replaces them by their sum, difference, product, or quotient. For example, if Zuming erases the numbers $6$ and $3$, he may replace them with one of the numbers in the set $\{6+3, 6-3, 3-6, 6\times 3, 6\div 3, 3\div 6\}$ $= \{9, 3, 3, 18, 2, \tfrac 12\}$. After $2019$ minutes, Zuming writes the single number $-2020$ on the blackboard. Show that it was possible for Zuming to have ended up with the single number $2020$ instead, using the same rules and starting with the same $2020$ integers.

*Proposed by Zhuo Qun (Alex) Song*
