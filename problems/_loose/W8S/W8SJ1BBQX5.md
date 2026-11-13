---
tag: W8SJ1BBQX5
kind: problem
type: answer
answer: No; for every starting value the sequence is bounded.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union ASU
---
Define the sequence $\{a\}_{n}$ of positive integers as follows. $a_{1} = m$. $a_{n + 1} = a_{n}$ plus the product of the digits of $a_{n}$. For example, if $m = 5$, we have $5, 10, 10, \ldots$. Is there an $m$ for which the sequence is unbounded?
