---
tag: 3N7BYDMXMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6500
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151296
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Collinear points $A$ , $B$ , and $C$ are given in the Cartesian plane such that $A= (a, 0)$ lies along the x-axis, $B$ lies along the line $y=x$ , $C$ lies along the line $y=2x$ , and $\frac{AB}{BC}=2$ . If $D= (a, a)$ , and the circumcircle of triangle $ADC$ intersects the line $y=x$ again at $E$ , and ray $AE$ intersects $y=2x$ at $F$ , evaluate $\frac{AE}{EF}$ .
