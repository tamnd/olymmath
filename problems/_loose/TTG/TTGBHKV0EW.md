---
tag: TTGBHKV0EW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232424
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_0, x_1, \ldots$ be a sequence of real numbers such that $x_0=1$ and $x_{n+1}=\sin(x_n)+\frac{\pi} {2}-1$ for all $n \geq 0$. Show that the sequence converges and find its limit.
