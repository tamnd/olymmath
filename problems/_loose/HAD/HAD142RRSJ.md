---
tag: HAD142RRSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h134075
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79266
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/1992
    source: hf-ai-mo-aops
    label: 1992 Vietnam National Olympiad
---
Let $ 9 < n_{1} < n_{2} < \ldots < n_{s} < 1992$ be positive integers and $$ P(x) = 1 + x^{2} + x^{9} + x^{n_{1}} + \cdots + x^{n_{s}} + x^{1992}.$$ Prove that if $ x_{0}$ is real root of $ P(x)$ then $ x_{0}\leq\frac {1 - \sqrt {5}}{2}$ .
