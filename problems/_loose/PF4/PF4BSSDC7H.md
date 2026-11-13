---
tag: PF4BSSDC7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250583
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions
---
For each positive integer $n$ let the set $A_n$ consist of all numbers $\pm 1 \pm 2 \pm ...\pm n$. For example, $$A_1 = \{-1,1\}, A_2 = \{ -3 ,-1 ,1 ,3 \} , A_3 = \{ -6 ,-4 ,-2 ,0 ,2 ,4 ,6 \}.$$
Find the number of elements in $A_n$ .
