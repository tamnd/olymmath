---
tag: YSSMFWC7K3
kind: problem
type: answer
answer: "1.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154520
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippines Mathematical Olympiad
---
Triangle $A B C$ is right-angled at $C$, and point $D$ on $A C$ is the foot of the bisector of $\angle B$. If $A B=6 \mathrm{~cm}$ and the area of $\triangle A B D$ is $4.5 \mathrm{~cm}^{2}$, what is the length, in $\mathrm{cm}$, of $C D$ ?
