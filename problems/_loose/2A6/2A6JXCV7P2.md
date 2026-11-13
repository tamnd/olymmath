---
tag: 2A6JXCV7P2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h2325374
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20096
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221597
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2021
    source: hf-ai-mo-aops
    label: 2021 Hong Kong TST
---
Let $f(x)$ be a polynomial with rational coefficients, and let $\alpha$ be a real number. If
$$\alpha^3-2019\alpha=(f(\alpha))^3-2019f(\alpha)=2021,$$
prove that $(f^n(\alpha))^3-2019f^n(\alpha)=2021$ for any positive integer $n$ .

(Here, we define $f^n(x)=\underbrace{f(f(f\cdots f}_{n\text{ times}}(x)\cdots ))$ .)
