---
tag: FF91GJZ8KZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
*Palindromic partitioning * of the natural number $ A $ is called, when $ A $ is written as the sum of natural the terms $ A = a_1 + a_2 + \ ldots + a_ {n-1} + a_n $ ($ n \geq 1 $), in which $ a_1 = a_n , a_2 = a_ {n-1} $ and in general, $ a_i = a_ {n + 1 - i} $ with $ 1 \leq i \leq n $.
For example, $ 16 = 16 $, $ 16 = 2 + 12 + 2 $ and $ 16 = 7 + 1 + 1 + 7 $ are *palindromic partitions* of the number $16$.
Find the number of all *palindromic partitions* of the number $2006$.
