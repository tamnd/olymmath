---
tag: J0J8CN0QVK
kind: problem
type: answer
answer: All positive integers except 1, 2, and 4.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ for which an integer that can be written as sum of squares of $n$ integers with each of them is divisible by $n$, can also be expressed as sum of squares of $n$ integers with none of them is divisible by $n$.
