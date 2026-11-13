---
tag: BXC8KX79WS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h592203
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11933
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213879
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
Let $n$ be a positive integer, and let $x=\frac{\sqrt{n+2}-\sqrt{n}}{\sqrt{n+2}+\sqrt{n}}$ and $y=\frac{\sqrt{n+2}+\sqrt{n}}{\sqrt{n+2}-\sqrt{n}}$ .

It is given that $14x^2+26xy+14y^2=2014$ . Find the value of $n$ .
