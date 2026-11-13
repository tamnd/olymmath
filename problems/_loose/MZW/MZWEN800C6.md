---
tag: MZWEN800C6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3401718
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37471
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=38
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Cuba MO
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irska
---
Let $n = (p^2 +2)^2 -9(p^2 -7)$ where $p$ is a prime number. Determine the smallest value of the sum of the digits of $n$ and for what prime number $p$ is obtained.
