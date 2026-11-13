---
tag: BG91ZN7NSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2028848
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36277
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93700
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=17
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2002
    source: hf-ai-mo-aops
    label: 2002 National High School Mathematics League
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Function $f(x)=\frac{x}{1-2^x}-\frac{x}{2}$ is $\text{(A)}$ an even function, not an odd function. $\text{(B)}$ an odd function, not an even function. $\text{(C)}$ an even function, also an odd function. $\text{(D)}$ neither an even function, nor an odd function.
