---
tag: MXP0N7FCBV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Defined as $N_0$ as the set of all non-negative integers. Set $S \subset N_0$ with not so many elements is called beautiful if for every $a, b \in S$ with $a \ge b$ ($a$ and $b$ do not have to be different), exactly one of $a + b$ or $a - b$ is in $S$. Set $T \subset N_0$ with not so many elements is called charming if the largest number $k$ such that up to 3$^k | a$ is the same for each element $a \in T$. Prove that each beautiful set must be charming.
