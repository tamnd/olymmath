---
tag: B5JKHS1D7M
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n$, let $\sigma(n)$ be the sum of all positive divisors of $n$. A sequence of positive integers $(a_i)_{i=0}^{\infty}$ is defined as follows: $a_0 = 1$ and for each $n > 1$, $a_n$ is the smallest integer greater than 1 such that
$$
\sigma(a_0 a_1 \cdots a_{n-1}) \mid \sigma(a_0 a_1 \cdots a_n).
$$
Determine the number of terms of this sequence dividing the number $2024^{2024}$.
