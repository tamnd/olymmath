---
tag: YAC2RME7JJ
kind: problem
type: answer
answer: No; the maximum possible size is 100.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=419
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
There is a set of $n$ 01-sequences of length 200. Every pair of 01-sequences differ at least at 101 positions. (For example, the two 01-sequences of length 6, 111100 and 010001 differ at four positions, 1st, 3rd, 4th and 6th positions, counting from the left.) Is it possible that $n \ge 101$?
