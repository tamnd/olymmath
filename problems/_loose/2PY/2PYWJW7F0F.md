---
tag: 2PYWJW7F0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h1430895
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61091
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253105
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 1
---
Find all injective functions $ f:\mathbb{N} \to \mathbb{N} $ such that $$ f^{f\left(a\right)}\left(b\right)f^{f\left(b\right)}\left(a\right)=\left(f\left(a+b\right)\right)^2 $$ holds for all $ a,b \in \mathbb{N} $ . Note that $ f^{k}\left(n\right) $ means $ \underbrace{f(f(\ldots f}_{k}(n) \ldots )) $
