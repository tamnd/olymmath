---
tag: T1EY2GX2F1
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of $n$ non-zero and distinct real numbers is said to be regular if, when these numbers are written on the board in ascending order, the difference between two adjacent numbers is always the same, regardless of the two adjacent numbers chosen. For example, the set $\{4,18,-3,11\}$ is regular because if the numbers are written in ascending order, $18-11=11-4=4-(-3)$. A set $A$ of non-zero and distinct real numbers is said to be super-regular if it is regular and the set formed by the inverses of the numbers in set $A$ is also regular.

What is the largest integer $n$ such that there exists a super-regular set of $n$ non-zero and distinct real numbers?
