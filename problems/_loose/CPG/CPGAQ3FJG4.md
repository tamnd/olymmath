---
tag: CPGAQ3FJG4
kind: problem
type: answer
answer: "1003"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Let $r$ be the positive root of the equation $x^2 - 2004x - 1 = 0$. Define the sequence $\{a_n\}$ as follows:
$$
a_0 = 1, a_{n+1} = [ra_n], n \ge 0,
$$
where $[y]$ denotes the greatest integer not exceeding $y$. Find the remainder when $a_{2004}$ is divided by $2004$.
