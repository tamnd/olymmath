---
tag: 7VNPRBKCF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The infinite sequence of numbers $a_{1}, a_{2}, a_{3}, \ldots$ is formed according to the rule: $a_{1}=1, a_{n+1}=\sqrt{a_{n}^{2}+\frac{1}{a_{n}}}$ for $n=1,2, \ldots$. Prove that some interval of length 1 contains more than a thousand terms of this sequence.
