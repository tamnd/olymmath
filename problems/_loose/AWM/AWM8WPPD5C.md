---
tag: AWM8WPPD5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h1822226
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18501
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220056
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2019
    source: hf-ai-mo-aops
    label: 2019 Vietnam National Olympiad
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam VMO
---
Consider polynomial $f(x)={{x}^{2}}-\alpha x+1$ with $\alpha \in \mathbb{R}.$
a) For $\alpha =\frac{\sqrt{15}}{2}$ , let write $f(x)$ as the quotient of two polynomials with nonnegative coefficients.
b) Find all value of $\alpha $ such that $f(x)$ can be written as the quotient of two polynomials with nonnegative coefficients.
