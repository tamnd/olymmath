---
tag: V7VK5NZNJ0
kind: problem
type: answer
answer: BE=BF
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154084
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Tenth Philippine Mathematical Olympiad
---
Let $P$ be a point outside a circle, and let the two tangent lines through $P$ touch the circle at $A$ and $B$. Let $C$ be a point on the minor arc $A B$, and let $\overrightarrow{P C}$ intersect the circle again at another point $D$. Let $L$ be the line that passes through $B$ and is parallel to $\overline{P A}$, and let $L$ intersect $\overrightarrow{A C}$ and $\overrightarrow{A D}$ at points $E$ and $F$, respectively. Prove that $B$ is the midpoint of $\overline{E F}$.
