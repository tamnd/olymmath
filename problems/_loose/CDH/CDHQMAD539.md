---
tag: CDHQMAD539
kind: problem
type: answer
answer: "210"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90277
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=96
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kelvin the frog jumps along the number line starting at 0 . Every time he jumps, he jumps either one unit left or one unit right. For example, one sequence of jumps might be $0 \rightarrow-1 \rightarrow 0 \rightarrow 1 \rightarrow 2 \rightarrow 3 \rightarrow 2$.

How many ways are there for Kelvin to make exactly 10 jumps and land on a prime number? (The prime numbers are the sequence $2,3,5,7, \ldots$ Negative numbers are not considered prime.)
