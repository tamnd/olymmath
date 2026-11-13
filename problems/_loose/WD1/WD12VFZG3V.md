---
tag: WD12VFZG3V
kind: problem
type: answer
answer: All positive integers M
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=33
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
Determine all positive integers $M$ for which the sequence $a_0, a_1, a_2, \ldots$, defined by $a_0 = 2M + \frac{1}{2}$ and $a_{k+1} = a_k[a_k]$ for $k = 0, 1, 2, \ldots$, contains at least one integer term.
