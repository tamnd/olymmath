---
tag: 7EF44WCKJE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, \ldots, a_{100}$ be 100 distinct integers such that $1 \leqslant a_{1}<a_{2}<\cdots<a_{100} \leqslant 400$.

For every integer $i$ such that $1 \leqslant i \leqslant 99$, we set $d_{i}=a_{i+1}-a_{i}$. Show that there are at least 15 numbers among $d_{1}, d_{2}, \ldots, d_{99}$ that are equal.
