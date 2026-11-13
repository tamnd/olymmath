---
tag: E1N8SNFYZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a non-infinite sequence $a_1,a_2…a_n$ of natural numbers. While it is possible, on each turn are chosen two arbitrary indexes $i<j$ such that $a_i \nmid a_j$, and then $a_i$ and $a_j$ are changed with their $gcd$ and $lcm$. Prove that this process is non-infinite and the created sequence doesn't depend on the made choices.
