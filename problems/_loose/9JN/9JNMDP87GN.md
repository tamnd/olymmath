---
tag: 9JNMDP87GN
kind: problem
type: answer
answer: 'If p is odd: n = m*(p−1)/2 + 2. If p is even: n = m*(p/2 − 1) + 3.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=42
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, p$ be integers larger than $2$. Find the least positive integer $n$, such that every $n$-element subset of $\{1, 2, 3, \dots, pm\}$ contains two numbers of sum divisible by $p$.
