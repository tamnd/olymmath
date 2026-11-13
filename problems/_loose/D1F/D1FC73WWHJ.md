---
tag: D1FC73WWHJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Ukraine National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2581587
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62949
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/1998
    source: hf-ai-mo-aops
    label: 1998 Ukraine National Math Olympiad
---
Real numbers $x$ and $y$ not less than $1$ have the property that $$ \left\lfloor\frac xy\right\rfloor=\frac{\lfloor nx\rfloor}{\lfloor ny\rfloor}\enspace\text{for any }n\in\mathbb N. $$ Prove that either $x=y$ or $x$ and $y$ are integers, one dividing the other.
