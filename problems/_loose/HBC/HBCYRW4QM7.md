---
tag: HBCYRW4QM7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a positive real number, $(a_n)_{n \ge 1}$ be a sequence of real numbers and $(x_n)_{n \ge 1}$ be the sequence defined by
$$
x_{n+1} = \left(1 - \frac{a}{n}\right) x_n + \frac{a_n}{n},
$$
where $x_1$ is an arbitrary real number. Prove that
$$
\lim_{n \to \infty} x_n = 0 \text{if and only if} \lim_{n \to \infty} \frac{a_1 + a_2 + \dots + a_n}{n} = 0.
$$
