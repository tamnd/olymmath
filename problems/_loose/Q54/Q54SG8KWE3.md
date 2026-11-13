---
tag: Q54SG8KWE3
kind: problem
type: answer
answer: x_k = k for all k = 1, 2, ..., n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}^*$. Find all real numbers $x_1, x_2, \dots, x_n$ such that $x_k \in [0, 2k)$, for every $k \in \{1, 2, \dots, n\}$, and
$$ \frac{1}{2-x_1} + \frac{2}{4-x_2} + \dots + \frac{n}{2n-x_n} = \frac{x_1}{1} + \frac{x_2}{2} + \dots + \frac{x_n}{n}. $$
