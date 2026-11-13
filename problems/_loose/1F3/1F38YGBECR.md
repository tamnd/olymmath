---
tag: 1F38YGBECR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Let $ABC$ be an acute-angled triangle where $|AC| > |AB|$. Let $N$ be the foot of the altitude from $A$ to side $\overline{BC}$. Let point $P$ be on the extension of segment $\overline{AB}$ beyond vertex $B$, and let point $Q$ be on the extension of segment $\overline{AC}$ beyond vertex $C$ such that $BPQC$ is a cyclic quadrilateral.

If $|NP| = |NQ|$, prove that $N$ is the circumcenter of triangle $APQ$.
