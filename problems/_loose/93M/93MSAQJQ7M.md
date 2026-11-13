---
tag: 93MSAQJQ7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $3$ clubs $A,B,C$ with non-empty members. For any triplet of members $(a, b, c)$ with $a \in A, b \in B, c \in C$, two of them are friend and two of them are not friend (here the friend relationship is bidirectional). Prove that one of
these statements must be true
1. There exist one student from $A$ that knows all students from $B$
2. There exist one student from $B$ that knows all students from $C$
3. There exist one student from $C$ that knows all students from $A$
