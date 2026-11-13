---
tag: 7P9D1KFXBQ
kind: problem
type: answer
answer: PC=QC
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154048
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=139
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
Let $A B C$ be an acute-angled triangle. Let $D$ and $E$ be points on $\overline{B C}$ and $\overline{A C}$, respectively, such that $\overline{A D} \perp \overline{B C}$ and $\overline{B E} \perp \overline{A C}$. Let $P$ be the point where $\overrightarrow{A D}$ meets the semicircle constructed outwardly on $\overline{B C}$, and $Q$ the point where $\overrightarrow{B E}$ meets the semicircle constructed outwardly on $\overline{A C}$. Prove that $P C=Q C$.
