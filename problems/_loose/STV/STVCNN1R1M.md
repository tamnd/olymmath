---
tag: STVCNN1R1M
kind: problem
type: answer
answer: AC=AB\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178648
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the triangle $ABC$, points $M$ and $N$ are taken on sides $(AB)$ and $(AC)$, respectively, such that $\widehat{ABC} \equiv \widehat{ANM}$. Let $D$ be the point symmetric to $A$ with respect to $B$, and let $P$ and $Q$ be the midpoints of segments $[MN]$ and $[CD]$, respectively.

Prove that points $A$, $P$, and $Q$ are collinear if and only if $AC = AB \sqrt{2}$.
