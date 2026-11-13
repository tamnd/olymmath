---
tag: MV4N7TKXYP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250703
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $ABC$ be a triangle, $I$ its incenter, and $\omega$ a circle of center $I$. Points $A',B', C'$ are on $\omega$ such that rays $IA', IB', IC',$ starting from $I$ intersect perpendicularly sides $BC, CA, AB$, respectively. Prove that lines $AA', BB', CC'$ are concurrent.
