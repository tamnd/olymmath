---
tag: V4V13G2EBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250690
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An acute triangle $ABC$ is inscribed in circle $\omega$ centered at $O$. Line $BO$ and side $AC$ meet at $B_1$. Line $CO$ and side $AB$ meet at $C_1$. Line $B_1C_1$ meets circle $\omega$ at $P$ and $Q$. If $AP = AQ$, prove that $AB = AC$.
