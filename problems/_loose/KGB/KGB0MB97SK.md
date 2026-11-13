---
tag: KGB0MB97SK
kind: problem
type: answer
answer: a_n = 1 + c(n - 1) for a fixed nonnegative integer c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Find all sequences $a_1, a_2, \ldots$ of positive integers such that the expression $n a_n - m a_m + 2 a_m - 1$ is divisible by $a_n + a_m - 1$ for all $n, m \ge 1$.
(Unubold Munkhbat)
