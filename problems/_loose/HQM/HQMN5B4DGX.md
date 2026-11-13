---
tag: HQMN5B4DGX
kind: problem
type: answer
answer: PA^{4}+PB^{4}+PC^{4}=2^{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90639
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the sum $A P^{4}+B P^{4}+C P^{4}$ does not depend on $P$, where $P$ is a point on the circumcircle of equilateral triangle $\triangle A B C$.
