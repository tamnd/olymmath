---
tag: TQ66SMR2QS
kind: problem
type: answer
answer: "833"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set $S=\{1,2,3, \cdots, N\}$ and its four 500-element subsets $A_{1}, A_{2}, A_{3}, A_{4}$ that satisfy: for any $x, y \in S$, there exists some $i \in\{1,2,3,4\}$, such that $x, y \in A_{i}$. Find the maximum possible value of the positive integer $N$.
