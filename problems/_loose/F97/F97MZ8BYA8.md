---
tag: F97MZ8BYA8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h512828
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8392
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
The polynomial $P(x) = x^3 + \sqrt{6} x^2 - \sqrt{2} x - \sqrt{3}$ has three distinct real roots. Compute the sum of all $0 \le \theta < 360$ such that $P(\tan \theta^\circ) = 0$ .

*Proposed by Lewis Chen*
