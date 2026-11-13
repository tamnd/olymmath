---
tag: D685M0ZGFN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h3551236
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2386
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2025
    source: hf-ai-mo-aops
    label: 2025 All-Russian Olympiad
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia LI Всероссийская математическая олимпиада школьников
---
What is the smallest value of $ k $ such that for any polynomial $ f(x) $ of degree $100$ with real coefficients, there exists a polynomial $ g(x) $ of degree at most $ k $ with real coefficients such that the graphs of $ y = f(x) $ and $ y = g(x) $ intersect at exactly $100$ points?
