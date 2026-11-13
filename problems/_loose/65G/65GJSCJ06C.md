---
tag: 65GJSCJ06C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h268924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3316
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205525
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2009
    source: hf-ai-mo-aops
    label: 2009 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given an integer $ n\ge 2$ , find the maximal constant $ \lambda (n)$ having the following property: if a sequence of real numbers $ a_{0},a_{1},a_{2},\cdots,a_{n}$ satisfies $ 0 = a_{0}\le a_{1}\le a_{2}\le \cdots\le a_{n},$ and $ a_{i}\ge\frac {1}{2}(a_{i + 1} + a_{i - 1}),i = 1,2,\cdots,n - 1,$ then $ (\sum_{i = 1}^n{ia_{i}})^2\ge \lambda (n)\sum_{i = 1}^n{a_{i}^2}.$
