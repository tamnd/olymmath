---
tag: FRMKBRJNQQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177508
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Is it true that for any permutation $a_{1}, a_{2}, \ldots, a_{2002}$ of $1,2, \ldots, 2002$ there are positive integers $m$ and $n$ of the same parity such that $1 \leq m<n \leq$ 2002 and $a_{m}+a_{n}=2 a_{\frac{m+n}{2}}$.
