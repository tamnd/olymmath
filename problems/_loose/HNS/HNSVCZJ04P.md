---
tag: HNSVCZJ04P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h220395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25079
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1992
    source: hf-ai-mo-aops
    label: 1992 IMO Longlists
---
Let $ f(x)$ be a polynomial with rational coefficients and $ \alpha$ be a real number such that $$ \alpha^3 - \alpha = [f(\alpha)]^3 - f(\alpha) = 33^{1992}.$$ Prove that for each $ n \geq 1,$ $$ \left [ f^{n}(\alpha) \right]^3 - f^{n}(\alpha) = 33^{1992},$$ where $ f^{n}(x) = f(f(\cdots f(x))),$ and $ n$ is a positive integer.
