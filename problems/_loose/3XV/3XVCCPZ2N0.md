---
tag: 3XVCCPZ2N0
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 62nd Ukrainian National Mathematical Olympiad, Third Round, First Tour
---
You are given a set of $n$ not necessarily distinct numbers $\{a_1, a_2, \dots, a_n\}$, (meaning that some of them can be equal). Consider all $2^n - 1$ nonempty subsets of this set, and for each such subset, find the sum of its elements. What largest number of these sums could turn out to be equal to $1$? For example, for a set $\{-1; 2; 2\}$ we have $7$ nonempty subsets: $\{-1\}$, $\{2\}$, $\{2\}$, $\{-1; 2\}$, $\{-1; 2\}$, $\{2; 2\}$ and $\{-1; 2; 2\}$, and among them there are exactly two subsets with sum $1$.
(Anton Trygub)
