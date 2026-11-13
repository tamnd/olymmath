---
tag: RFDBWS35AA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In any triangle $A B C$, let the side lengths be denoted as usual by $a, b, c$. The angle bisector of $\angle C A B$ intersects the side $B C$ at a point $D$.

Prove that in any triangle, for the length $w$ of the segment $A D$, the following holds:

$$
w=\frac{\sqrt{b c}}{b+c} \sqrt{(b+c)^{2}-a^{2}}
$$
