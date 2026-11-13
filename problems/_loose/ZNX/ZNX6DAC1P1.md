---
tag: ZNX6DAC1P1
kind: problem
type: answer
answer: 2n - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One is given $n$ coins of pairwise distinct weights and $n$ scales, $n > 2$. On each weighing, it is permitted to put two coins onto the pans of one of the scales, check the result, and take the coins back from the pans. One of the scales (nobody knows which one) is possibly broken, and it provides random results (sometimes correct, sometimes incorrect). Determine the smallest number of weighings at which one can determine for sure which coin is the heaviest one.
