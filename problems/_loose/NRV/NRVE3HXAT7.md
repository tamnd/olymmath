---
tag: NRVE3HXAT7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h164534
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44327
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Iran MO (3rd Round)
---
Prove that for two non-zero polynomials $ f(x,y),g(x,y)$ with real coefficients the system:
$$ \left\{\begin{array}{c}f(x,y)=0 g(x,y)=0\end{array}\right.$$
has finitely many solutions in $ \mathbb C^{2}$ if and only if $ f(x,y)$ and $ g(x,y)$ are coprime.
