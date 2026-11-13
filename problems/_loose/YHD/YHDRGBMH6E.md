---
tag: YHDRGBMH6E
kind: problem
type: answer
answer: a) 86; b) Yes
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
We call a number *pal* if it doesn't have a zero digit and the sum of the squares of the digits is a perfect square. For example, $2115522$ is pal (because $2^2 + 1^2 + 1^2 + 5^2 + 5^2 + 2^2 + 2^2 = 8^2$) but $304$ and $12$ are not pal.

a. What is the greatest two-digit pal number?

b. Does there exist a $2011$-digit pal number?
