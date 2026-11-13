---
tag: 5V6KQDCRFJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2022$ students in winter school. Two arbitrary students are friend or enemy each other. Each turn, we choose a student $S$, make friends of $S$ enemies, and make enemies of $S$ friends. This continues until it satisfies the final condition.

**Final Condition** : For any partition of students into two non-empty groups $A$, $B$, there exist two students $a$, $b$ such that $a\in A$, $b\in B$, and $a$, $b$ are friend each other.

Determine the minimum value of $n$ such that regardless of the initial condition, we can satisfy the final condition with no more than $n$ turns.
