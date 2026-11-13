---
tag: BGE3HW8AG1
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154343
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 18th PMO National Stage Oral Phase
---
Let $\square A B C D$ be a trapezoid with parallel sides $A B$ and $C D$ of lengths 6 units and 8 units, respectively. Let $E$ be the point of intersection of the extensions of the nonparallel sides of the trapezoid. If the area of $\triangle B E A$ is 60 square units, what is the area of $\triangle B A D$ ?
