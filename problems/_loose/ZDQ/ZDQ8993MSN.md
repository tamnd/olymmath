---
tag: ZDQ8993MSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250717
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
There are totally $16$ teams participating in a football tournament, each team playing with every other exactly $1$ time. In each match, the winner gains $3$ points, the loser gains $0$ point and each teams gain $1$ point for the tie match. Suppose that at the end of the tournament, each team gains the same number of points. Prove that there are at least $4$ teams that have the same number of winning matches, the same number of losing matches and the same number of tie matches.
