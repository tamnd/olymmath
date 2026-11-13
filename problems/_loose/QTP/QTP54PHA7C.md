---
tag: QTP54PHA7C
kind: problem
type: answer
answer: "92"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=99
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
A positive integer $k$ is called *nice* if there exist positive integers $a_1, a_2, \dots, a_{2021}$ such that
(1) $a_i - a_j$ is not divisible by $2023$ for any pair $1 \le i < j \le 2021$,
(2) for any index $i$ there exists an index $j$ such that $a_i - k a_j$ is divisible by $2023$.
Find the largest good number $k$ which is even and less than $100$.
