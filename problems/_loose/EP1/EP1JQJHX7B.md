---
tag: EP1JQJHX7B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $ABC$ be an isosceles triangle with $|AB| = |AC|$. The points $B'$ and $C'$ are on the line $BC$ (extended in both directions) such that $B$ is between $B'$ and $C$ and $C$ is between $B$ and $C'$. Moreover, $B'BA$ and $ACC'$ are isosceles triangles. Let $X$ be a point on the line $BC$ such that $B'$ is not between $X$ and $B$.
Prove that $|AX| = |BX|$ if and only if $\frac{1}{|AB|} = \frac{1}{|B'X|} + \frac{1}{|BC'|}$.
