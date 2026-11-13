---
tag: XXM3GBB7JE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To play the lottery game Sum Thing, you choose five distinct numbers from 1 to 50 , then the lottery master chooses five distinct numbers from 1 to 50 . If there exist a nonempty subset of your five numbers and a nonempty subset of the lottery master's five numbers such that both subsets have the same sum, then you win.

Can you choose five numbers that guarantee a win? Either demonstrate such a set, with a proof of validity, or prove that no such set exists.
