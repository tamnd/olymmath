---
tag: 7B900QHJAN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show Theorem 3.2.11.

Here is a small supplement on matchings. The marriage problem is as follows. There are $n$ children and $n$ stuffed animals, and we want to assign one stuffed animal to each child. For this, each child ranks the stuffed animals in order of preference, and each stuffed animal ranks the children in order of preference. The goal is to find an assignment such that there does not exist a child and a stuffed animal who would both prefer to be together rather than with their assigned partners.

Theorem 3.2.12 (Existence of a Stable Marriage).

There always exists a stable marriage.
