---
tag: V1CDQTGJ4Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2028058
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36275
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234823
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=2
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
The increasing interval of $f(x)=\log_{\frac{1}{2}}(x^2-2x-3)$ is $\text{(A)}(-\infty,-1) \text{(B)}(-\infty,1) \text{(C)}(1,+\infty) \text{(D)}(3,+\infty)$
