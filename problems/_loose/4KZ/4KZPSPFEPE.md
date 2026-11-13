---
tag: 4KZPSPFEPE
kind: problem
type: answer
answer: AD \cdot BE = PD^2 \iff FB \cdot FA + CP^2 = CF^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213351
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a line $\ell$ intersect the line $AB$ at $F$, the sides $AC$ and $BC$ of a triangle $ABC$ at $D$ and $E$, respectively and the internal bisector of the angle $BAC$ at $P$. Suppose that $F$ is at the opposite side of $A$ with respect to the line $BC$, $CD = CE$ and $P$ is in the interior the triangle $ABC$. Prove that
$$FB \cdot FA+CP^2 = CF^2 \iff AD \cdot BE = PD^2.$$
