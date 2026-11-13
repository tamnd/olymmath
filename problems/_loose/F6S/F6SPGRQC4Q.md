---
tag: F6SPGRQC4Q
kind: problem
type: answer
answer: "49"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are sets $A, B$, and $C$ such that:

- $A \cup B \cup C=\{1,2,3, \ldots, 100\}$;
- $A$ is the set of all natural numbers not greater than 100 that are divisible by 2;
- $B$ is the set of all natural numbers not greater than 100 that are divisible by 3;
- $B \cap C$ is the set of all natural numbers not greater than 100 whose sum of digits is equal to 9;
- $(A \cap C) \backslash B$ is the set of all two-digit numbers that are not divisible by 3 and whose unit digit is equal to 4.

Determine the number of elements in the set $C$.
