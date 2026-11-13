---
tag: 7JTB7KFB6A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a pair of positive integers $\overline{a_1a_2\ldots a_k}$ and $\overline{b_1b_2\ldots b_k}$ $k$-similar if all digits $a_1, a_2, \ldots, a_k , b_1 , b_2, \ldots, b_k$ are distinct, and there exist distinct positive integers $m, n$, for which the following equality holds:

$$a_1^m + a_2^m + \ldots + a_k^m = b_1^n + b_2^n + \ldots + b_k^n$$

For which largest $k$ do there exist $k$-similar numbers?

*Proposed by Oleksiy Masalitin*
