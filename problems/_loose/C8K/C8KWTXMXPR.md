---
tag: C8KWTXMXPR
kind: problem
type: answer
answer: (24, 26, 25, 25, 1), (12, 20, 4, 64, 4), (0, 18, 1, 81, 9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Non-negative integers $a, b, c, d$ satisfy the equation $a + b + c + d = 100$ and there
exists a non-negative integer n such that
$$a+ n =b- n= c \times n = \frac{d}{n} $$
Find all 5-tuples $(a, b, c, d, n)$ satisfying all the conditions above.
