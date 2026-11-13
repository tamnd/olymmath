---
tag: CW28YZ71ES
kind: problem
type: answer
answer: (x, y) in {(0, 2019), (1009^2, 1), (336^2·3, 3), (335^2, 9), (673, 673)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(x, y)$ of integers such that
$$
\sqrt{x+2019} - \sqrt{x} = \sqrt{y}.
$$
