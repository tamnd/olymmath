---
tag: 80APSAAFXB
kind: problem
type: answer
answer: 'Maximum number: 21523361; Number of ways: 1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=187
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
In a city the phone numbers should consist of exactly eight digits, and $0$ is not allowed as a digit in them (i.e., only $1, 2, 3, \ldots, 9$ may be used). It is required that every two phone numbers either be different in at least two places, or have digits separated by at least two units, in at least one of the eight places. (For example, both $12345678$ and $23345678$ may be selected if there is no more conflict with other numbers, or both $12345678$ and $92345678$ may be selected, again if there is no more conflict with other numbers, but at most one of $12345678$ and $12345679$ may be selected.)
What is the maximum number of phone numbers that can be selected, satisfying the requirements? In how many ways can one select this amount of phone numbers?
