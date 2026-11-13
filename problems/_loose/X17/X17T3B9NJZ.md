---
tag: X17T3B9NJZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice has an integer $N > 1$ on the blackboard. Each minute, she deletes the current number $x$ on the blackboard and writes $2x+1$ if $x$ is not the cube of an integer, or the cube root of $x$ otherwise. Prove that at some point of time, she writes a number larger than $10^{100}$.

*Proposed by Anant Mudgal and Rohan Goyal*
