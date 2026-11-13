---
tag: BV7SJQ9QQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221978
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $ABC$ be an acute, non-isosceles triangle with circumcenter $O$. Tangent lines to $(O)$ at $B,C$ meet at $T$. A line passes through $T$ cuts segments $AB$ at $D$ and cuts ray $CA$ at $E$. Take $M$ as midpoint of $DE$ and suppose that $MA$ cuts $(O)$ again at $K$. Prove that $(MKT)$ is tangent to $(O)$.
