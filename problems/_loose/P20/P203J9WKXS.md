---
tag: P203J9WKXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, consider the sequence $(a_i)$, $1 \leq i \leq 2n$, defined as follows:

$a_{2k-1} = -k, 1 \leq k \leq n$
$a_{2k} = n-k+1, 1 \leq k \leq n.$

We call a pair of numbers $(b,c)$ good if the following conditions are met:

$i) 1 \leq b < c \leq 2n,$

$ii) \sum_{j=b}^{c}a_j = 0$

If $B(n)$ is the number of good pairs corresponding to $n$, prove that there are infinitely many $n$ for which $B(n) = n$.
