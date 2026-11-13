---
tag: MBVXYDECH3
kind: problem
type: answer
answer: all integers greater than or equal to 91
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XI OBM
---
Let $Z$ be the set of integers. $f: Z \rightarrow Z$ is defined by $f(n) = n - 10$ for $n > 100$ and $f(n) = f(f(n+11))$ for $n = 100$. Find the set of possible values of $f$.
