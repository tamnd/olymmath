---
tag: DG4X1K4FAH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 67th NMO Selection Tests for BMO and IMO
---
Given a positive integer $n$, determine all functions $f$ from the first $n$ positive integers to the positive integers, satisfying the following two conditions:
$$
(1) \sum_{k=1}^{n} f(k) = 2n;
$$
$$
(2) \sum_{k \in K} f(k) = n \text{ for no subset } K \text{ of the first } n \text{ positive integers.}
$$
