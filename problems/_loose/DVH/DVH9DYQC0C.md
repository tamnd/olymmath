---
tag: DVH9DYQC0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Silk_Road_Mathematics_Competition/train/0000.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: silk-road
    source: hf-mathnet
    label: Silk Road Mathematics Competition Silk Road Mathematics Competition
---
Let $n \ge 2$ be an integer. Prove that
$$
(1^{n-1} + 2^{n-1} + \dots + (n-1)^{n-1}) + 1 \text{ is divisible by } n
$$
if and only if, for each prime factor $p$ of $n$
$$
\frac{n}{p}-1 \text{ is divisible by } p \text{ and } \frac{n}{p}-1 \text{ is divisible by } p-1.
$$
