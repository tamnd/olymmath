---
tag: NWF0S50D0P
kind: problem
type: answer
answer: "504"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $S$ as a binary string of $10^{4}$ bits containing only $0$ and $1$, a positive integer $k \leqslant 10^{4}$, a $k$-block of $S$ is a substring of $S$ consisting of $k$ consecutive bits. Two $k$-blocks $a_{1} a_{2} \cdots a_{k}=b_{1} b_{2} \cdots b_{k}$ are equal if and only if $a_{i}=b_{i}(i=1$, $2, \cdots, k)$. Consider all $10^{4}$-bit binary strings that contain at most seven different 3-blocks. Find the maximum number of different 10-blocks such a string can contain.
