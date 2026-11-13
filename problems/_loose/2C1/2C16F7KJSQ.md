---
tag: 2C16F7KJSQ
kind: problem
type: answer
answer: 3k for any integer k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Let $f: N \to Z$ be the function that for any two positive integers $a, b$ $f(ab) = f(a) + f(b)$. Find all possible values of $f(1000)$.
