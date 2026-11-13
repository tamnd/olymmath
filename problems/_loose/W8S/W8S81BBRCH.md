---
tag: W8S81BBRCH
kind: problem
type: answer
answer: All odd positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=225
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
Find all positive integers $n$ for which all $10^n$ non-negative integers consisting of $n$ digits can be ordered in such a way that all the following conditions are met:
(1) the first number consists of zeros only;
(2) every two numbers that are consecutive in this order differ at exactly one position and the digits at this position differ by exactly 1;
(3) the last number consists of nines only.

*Remark:* In this problem, we allow numbers to begin with zero(s).
