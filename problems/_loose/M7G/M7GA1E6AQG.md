---
tag: M7GA1E6AQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h353453
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4972
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2010
    source: hf-ai-mo-aops
    label: 2010 IMAC Arhimede
---
Consider real numbers $a, b ,c \ge0$ with $a+b+c=2$ . Prove that: $\frac{bc}{\sqrt[4]{3a^2+4}}+\frac{ca}{\sqrt[4]{3b^2+4}}+\frac{ab}{\sqrt[4]{3c^2+4}} \le \frac{2*\sqrt[4] {3}}{3}$
