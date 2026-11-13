---
tag: QP4FVF69H6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75532
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=80
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
---
Assume that for real numbers $x, y, z$ the following holds:

$$
15(x+y+z)=12(xy+yz+zx)=10\left(x^{2}+y^{2}+z^{2}\right)
$$

and that at least one of them is different from zero.

a) Prove the equality $x+y+z=4$.

b) Find the smallest interval $\langle a, b\rangle$ in which all three numbers from any triple $(x, y, z)$ satisfying the conditions of the problem lie.
