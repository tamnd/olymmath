---
tag: 7Y62WR2KJS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a non-empty set $A$, let $\pi(A)$ denote the product of all elements in $A$. Let $P$ be the set of all prime numbers. Find all possible sets $M$ that satisfy the following conditions:
(1) $M \subseteq P$;
(2) The set $M$ contains at least three elements;
(3) For any non-empty proper subset $L$ of $M$, all prime factors of $\pi(L)-1$ are in the set $M$.
