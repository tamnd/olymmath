---
tag: APMCYJB2FW
kind: problem
type: answer
answer: a_i = ki
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sequence $a_1, a_2, \ldots$ of positive integers such that
$$
\left[\frac{a_m}{a_n}\right] = \left[\frac{m}{n}\right]
$$

for any positive integers $m$, $n$.
However, for a real number $r$, the maximum that does not exceed $r$ is denoted by $[r]$.
