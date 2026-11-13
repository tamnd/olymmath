---
tag: 7NRB1M2FB2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Tim has a multiset of positive integers. Let $c_i$ be the number of occurrences of numbers that are *at least* $i$ in the multiset. Let $m$ be the maximum element of the multiset. Tim calls a multiset *spicy* if $c_1, \dots, c_m$ is a sequence of strictly decreasing powers of $3$. Tim calls the *hotness* of a spicy multiset the sum of its elements. Find the sum of the hotness of all spicy multisets that satisfy $c_1 = 3^{2020}$. Give your answer $\pmod{1000}$. (Note: a multiset is an unordered set of numbers that can have repeats)

*Proposed by Timothy Qian*
