---
tag: CXE29GN12V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $ f: \mathbb R^2\rightarrow \mathbb R$ is a non-negative and continuous function that $ \iint_{\mathbb R^2}f(x,y)dxdy=1$. Prove that there is a closed disc $ D$ with the least radius possible such that $ \iint_D f(x,y)dxdy=\frac12$.
