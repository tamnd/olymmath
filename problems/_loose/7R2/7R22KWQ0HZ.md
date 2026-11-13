---
tag: 7R22KWQ0HZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ that satisfy the following conditions:
(1) $n$ has at least 4 positive divisors;
(2) If $d_{1}<d_{2}<\cdots<d_{k}$ are all the positive divisors of $n$, then $d_{2}-d_{1}, d_{3}-d_{2}, \cdots, d_{k}-d_{k-1}$ form a geometric sequence.
