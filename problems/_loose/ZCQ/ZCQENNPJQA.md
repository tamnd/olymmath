---
tag: ZCQENNPJQA
kind: problem
type: answer
answer: Equality holds exactly at (0, 0, 0), (1, 0, 0), (0, 1, 0), and (0, 0, 1).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Suppose $0 \le x, y, z$, and $x+y+z \le 1$. Prove that
$$
6xyz \le x(1-x) + y(1-y) + z(1-z),
$$
and describe the cases of equality.
