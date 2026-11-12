---
tag: 9CVT8YYKR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $2 n$-digit natural number $a$ and a natural number $k$. The numbers $a$ and $k a$ were written on a tape, and each of the two records was cut into two-digit numbers, starting from the last digits (here, the numbers 00, 01, ..., 09 are also considered two-digit; if the number $k a$ ended up with an odd number of digits, a 0 was added to the front). It turned out that the two-digit numbers obtained from $a$ strictly decrease from right to left (from the lower to the higher digits of $a$), while those from $k a$ strictly increase. Prove that $k \geq n$. (O. Nechaeva, S. Berlov)
