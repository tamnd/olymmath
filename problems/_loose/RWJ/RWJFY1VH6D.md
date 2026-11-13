---
tag: RWJFY1VH6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Rioplatense Mathematical Olympiad, Level 3
    url: https://artofproblemsolving.com/community/c6h419602
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5559
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207704
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2010
    source: hf-ai-mo-aops
    label: 2010 Rioplatense Mathematical Olympiad, Level 3
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Mathematical Olympiad Rioplatense
---
Let $r_2, r_3,\ldots, r_{1000}$ denote the remainders when a positive odd integer is divided by $2,3,\ldots,1000$ , respectively. It is known that the remainders are pairwise distinct and one of them is $0$ . Find all values of $k$ for which it is possible that $r_k = 0$ .
