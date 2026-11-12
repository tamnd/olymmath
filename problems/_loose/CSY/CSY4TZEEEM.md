---
tag: CSY4TZEEEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585200
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
Does there exist a function $f:\{1,2,...,2025\}^2 \rightarrow \{1,2,...,2025\}$ such that: $\bullet$ for any positive integer $i \leqslant 2025$ , the numbers $f(i,1),f(i,2),...,f(i,2025)$ are all distinct, and $\bullet$ for any positive integers $i \leqslant 2025$ and $j \leqslant 2024$ , $f(f(i,j),f(i,j+1))=i$ ?

*Proposed by Shantanu Nene*
