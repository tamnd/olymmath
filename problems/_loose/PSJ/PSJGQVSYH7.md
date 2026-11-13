---
tag: PSJGQVSYH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Z}^{2}\to \mathbb{R}^{+}$ such that for all $i, j \in \mathbb{Z}$: $$f(i,j)=\frac{f(i+1, j)+f(i,j+1)+f(i-1,j)+f(i,j-1)}{4}.$$
