---
tag: 7ZHVHGBJ2P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248137
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=417
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
Given any positive integer $n$, prove that:
**(a)** Every $n$ points in the closed unit square $[0,1]\times [0,1]$ can be joined by a path of length less than $2\sqrt{n}+4$; and
**(b)** There exist $n$ points in the closed unit square $[0,1]\times [0,1]$ that cannot be joined by a path of length less than $\sqrt{n}-1$.
