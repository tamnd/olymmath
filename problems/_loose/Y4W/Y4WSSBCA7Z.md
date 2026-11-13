---
tag: Y4WSSBCA7Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given integer $N \geq 4$, find the maximum value of the sum $s$: $s=\sum_{i=1}^{\left[\frac{k}{2}\right]+1}\left(\left[\frac{n_{i}}{2}\right]+1\right)$, where $k \geq 3$, $n_{1} \geq n_{2} \geq \cdots \geq n_{k} \geq 1$ are all integers, and $n_{1}+n_{2}+\cdots+n_{k}=N$.
