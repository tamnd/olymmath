---
tag: 1FB19PAQCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1833850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35324
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2018
    source: hf-ai-mo-aops
    label: 2018 China Second Round Olympiad
---
Let $n,k,m$ be positive integers, where $k\ge 2$ and $n\le m < \frac{2k-1}{k}n$ . Let $A$ be a subset of $\{1,2,\ldots ,m\}$ with $n$ elements. Prove that every integer in the range $\left(0,\frac{n}{k-1}\right)$ can be expressed as $a-b$ , where $a,b\in A$ .
