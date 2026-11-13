---
tag: C5BP9KGE9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3313182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1086
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Romania Team Selection Test
  - at: balkan-sl/2023
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2023 Short List
---
Find all positive integers, such that there exist positive integers $a, b, c$ , satisfying $\gcd(a, b, c)=1$ and $n=\gcd(ab+c, ac-b)=a+b+c$ .
