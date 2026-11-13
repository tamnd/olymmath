---
tag: G8T0ZTKAGQ
kind: problem
type: answer
answer: All positive integers n with n ≡ 0, 1, or 3 mod 4 (i.e., n not ≡ 2 mod 4).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Find all positive integers $n$ for which it is possible to write all positive integers from $1$ to $n$ in some order on a circle, each exactly once, such that every number is coprime with the number that is two positions away from it.
