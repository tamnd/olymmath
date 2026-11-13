---
tag: 9XVRBFZA0M
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Junior Macedonian Mathematical Olympiad
---
A positive integer is written in each $1 \times 1$ cell of a rectangular board. The following two steps are allowed:

i) the numbers in the cells of an arbitrarily chosen row are multiplied by $2$;
ii) the numbers in the cells of an arbitrarily chosen column are decreased by $1$.

Is it possible after finite repetition of steps i) and ii) to get a board only with zeroes?
