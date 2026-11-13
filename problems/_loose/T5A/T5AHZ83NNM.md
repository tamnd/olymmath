---
tag: T5AHZ83NNM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=62341
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Third Round (Second Tour)
---
Equal segments $A B$ and $C D$ intersect at point $O$ and are divided by it in the ratio $A O: O B=C O: O D=1: 2$. Lines $A D$ and $B C$ intersect at point $M$.

Prove that triangle $D M B$ is isosceles.
