---
tag: ZSMNQA4VJ9
kind: problem
type: answer
answer: n = 1 or n is even
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=3
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2010
    source: hf-mathnet
    label: Estonia Estonija 2010
---
The sequence $(a_n)$ is defined by $a_1 = 1$ and $a_n = n \cdot (a_1 + \dots + a_{n-1})$ for all $n > 1$. Find all indices $n$ for which $a_n$ is divisible by $1 \cdot 2 \cdot \dots \cdot n$. (Grade 12.)
