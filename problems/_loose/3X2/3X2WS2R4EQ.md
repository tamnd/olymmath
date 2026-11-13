---
tag: 3X2WS2R4EQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h410774
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23539
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
A triangle $(ABC)$ and a point $D$ in its plane satisfy the relations
$$\frac{BC}{AD}=\frac{CA}{BD}=\frac{AB}{CD}=\sqrt{3}.$$
Prove that $(ABC)$ is equilateral and $D$ is its center.
