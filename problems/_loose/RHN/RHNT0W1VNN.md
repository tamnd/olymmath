---
tag: RHNT0W1VNN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h136888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48328
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Moldova National Olympiad
---
The continuous function and twice differentiable function $f: \mathbb{R}\rightarrow\mathbb{R}$ satisfies $2007^{2}\cdot f(x)+f''(x)=0$ . Prove that there exist two such real numbers $k$ and $l$ such that $f(x)=l\cdot\sin(2007x)+k\cdot\cos(2007x)$ .
