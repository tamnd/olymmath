---
tag: 1ATC6Z5G0E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h80082
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Moldova National Olympiad
---
Let $n\in\mathbb{N}^*$ . Prove that $$ \lim_{x\to 0}\frac{ (1+x^2)^{n+1}-\prod_{k=1}^n\cos kx}{ x\sum_{k=1}^n\sin kx}=\frac{2n^2+n+12}{6n}. $$
