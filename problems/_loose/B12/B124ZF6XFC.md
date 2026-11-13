---
tag: B124ZF6XFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44802
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2000
    source: hf-ai-mo-aops
    label: 2000 Irish Math Olympiad
---
Let $ p(x)=a_0 +a_1 x+...+a_n x^n$ be a polynomial with nonnegative real coefficients. Suppose that $ p(4)=2$ and $ p(16)=8$ . Prove that $ p(8) \le 4$ and find all such $ p$ with $ p(8)=4$ .
