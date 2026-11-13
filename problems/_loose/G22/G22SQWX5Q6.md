---
tag: G22SQWX5Q6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h592207
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11936
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2014
    source: hf-ai-mo-aops
    label: 2014 Singapore Senior Math Olympiad
---
Suppose that $x$ is measured in radians. Find the maximum value of $$\frac{\sin2x+\sin4x+\sin6x}{\cos2x+\cos4x+\cos6x}$$ for $0\le x\le \frac{\pi}{16}$
