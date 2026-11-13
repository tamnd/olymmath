---
tag: C1NPV1YVXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the number of ways you can choose two distinct integers $a$ and $b$ (unordered i.e. choosing $(a, b)$ is same as choosing $(b, a)$ from the set $\{1, 2, \cdots , 100\}$ such that difference between them is atmost 10, i.e. $|a-b|\leq 10$

- ${{100}\choose{2}} -{{90}\choose{2}}$

- ${{100}\choose{2}} -90$

- ${{100}\choose{2}} -{{90}\choose{2}}-100$

- None of the above
