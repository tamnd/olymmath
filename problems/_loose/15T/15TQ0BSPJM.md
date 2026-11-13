---
tag: 15TQ0BSPJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a mathematics competition, some contestants are friends. Let the set of all contestants be $X$. For a subset $Y$ of $X$, if these people can be paired up such that each pair consists of two contestants who are friends, then the subset $Y$ is called "pairable". It is known that the set $X$ is not pairable, and for any contestants $A, B \in X$, if $A, B$ are not friends, then $X \backslash\{A, B\}$ is pairable, and no one in $X$ is friends with everyone else. Prove: For any contestants $a, b, c \in X$, if $a, b$ are friends, and $b, c$ are friends, then $a, c$ are also friends.
