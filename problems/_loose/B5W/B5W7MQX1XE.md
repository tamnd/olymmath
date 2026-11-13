---
tag: B5W7MQX1XE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90393
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a sequence $s_{1}, s_{2}, \ldots$, of positive integers satisfies $s_{n+2}=s_{n+1}+s_{n}$ for all positive integers $n$ (but not necessarily $s_{1}=s_{2}=1$ ). Prove that there exists an integer $r$ such that $s_{n}-r$ is not divisible by 8 for any integer $n$.
