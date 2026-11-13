---
tag: B8XVEW8CEW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h446952
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40538
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2000
    source: hf-ai-mo-aops
    label: 2000 Greece National Olympiad
---
Find the maximum value of $k$ such that $$\frac{xy}{\sqrt{(x^2 + y^2)(3x^2 + y^2)}}\leq \frac{1}{k}$$
holds for all positive numbers $x$ and $y.$
