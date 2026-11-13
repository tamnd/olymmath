---
tag: 2CEYJE3XPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235894
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=63
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an acute-angled triangle $ABC$ and its circumcircle. Let $D$ be a point on the arc $AB$ which does not include point $C$ and let $A_1$ and $B_1$ be points on the lines $DA$ and $DB$, respectively, such that $CA_1 \perp DA$ and $CB_1 \perp DB$. Prove that $|AB| \ge |A_1B_1|$.
