---
tag: E0T3CAWKKQ
kind: problem
type: answer
answer: "91"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154554
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippine Mathematical Olympiad
---
Trapezoid $A B C D$ has parallel sides $A B$ and $C D$, with $B C$ perpendicular to them. Suppose $A B=13, B C=16$ and $D C=11$. Let $E$ be the midpoint of $A D$ and $F$ the point on $B C$ so that $E F$ is perpendicular to $A D$. Find the area of quadrilateral $A E F B$.
