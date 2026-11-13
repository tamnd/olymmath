---
tag: RDVDD16T8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of positive integers $\{a_n\}_{n \ge 1}$ is such that
$$
a_n \le 1000^{1000^{\sqrt{\log_2 n}}}, \forall n = 1, 2, 3, \dots
$$
It is known that any number appears in the sequence at most $5000$ times. Prove that there are infinitely many primes, each of which divides at least one member of the sequence.
