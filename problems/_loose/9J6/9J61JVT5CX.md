---
tag: 9J61JVT5CX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3556988
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Prove that there is a positive integer such that the decimal representation of $$ \sum_{k=1}^{\lfloor n/3 \rfloor} \binom{n}{3k}8^k $$ has all of its last $2023$ digits equal to $8$ .
