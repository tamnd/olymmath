---
tag: 1VJF88C8JJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=46
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irska
---
Let $(a_n)$ be the "iterated Fibonacci sequence": $a_n = f(f(n))$, where $f(1) = f(2) = 1$, and $f(n+2) = f(n+1) + f(n)$. Prove that $a_n$ is a multiple of 144 whenever it is a multiple of 14.
