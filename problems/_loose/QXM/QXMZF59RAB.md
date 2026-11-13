---
tag: QXMZF59RAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h466255
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3336
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2009
    source: hf-ai-mo-aops
    label: 2009 China Western Mathematical Olympiad
---
The real numbers $a_{1},a_{2},\ldots ,a_{n}$ where $n\ge 3$ are such that $\sum_{i=1}^{n}a_{i}=0$ and $2a_{k}\le\ a_{k-1}+a_{k+1}$ for all $k=2,3,\ldots ,n-1$ . Find the least $f(n)$ such that, for all $k\in\left\{1,2,\ldots ,n\right\}$ , we have $|a_{k}|\le f(n)\max\left\{|a_{1}|,|a_{n}|\right\}$ .
