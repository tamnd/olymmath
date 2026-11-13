---
tag: A9HSBFEEB2
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=32
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the least real number $c$, such that for any integer $n \ge 1$ and any positive real numbers $a_1, a_2, \dots, a_n$, the following holds
$$
\sum_{k=1}^{n} \frac{k}{\frac{1}{a_1} + \frac{1}{a_2} + \dots + \frac{1}{a_k}} < c \sum_{k=1}^{n} a_k.
$$
