---
tag: 4G8GK0M7AX
kind: problem
type: answer
answer: "4950"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90499
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine, with proof, the value of

$$
1^{2}-2^{2}+3^{2}-4^{2}+5^{2}-\cdots+97^{2}-98^{2}+99^{2} .
$$
