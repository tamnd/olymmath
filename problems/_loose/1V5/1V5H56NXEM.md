---
tag: 1V5H56NXEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485164
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71331
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
Assume that $a,b,c,d$ are positive integers, and $\dfrac{a}{c}=\dfrac{b}{d}=\dfrac{3}{4}$ , $\sqrt{a^2+c^2}-\sqrt{b^2+d^2}=15$ . Find $ac+bd-ad-bc$ .
