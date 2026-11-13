---
tag: YCS2ZBS9A8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1113225
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12646
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2015
    source: hf-ai-mo-aops
    label: 2015 India IMO Training Camp
---
Let $f$ and $g$ be two polynomials with integer coefficients such that the leading coefficients of both the polynomials are positive. Suppose $\deg(f)$ is odd and the sets $\{f(a)\mid a\in \mathbb{Z}\}$ and $\{g(a)\mid a\in \mathbb{Z}\}$ are the same. Prove that there exists an integer $k$ such that $g(x)=f(x+k)$ .
