---
tag: ZNPBC2DGDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232659
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
For a non-isosceles $ABC$ we have that $2AC = AB + BC$. Point $I$ is the center of the circle inscribed in $\triangle ABC$, point $K$ is the middle of the arc $\widehat{AC}$ that includes point $B$, and point $T$ is from the line $AC$, such that $\angle TIB = 90^\circ$. Prove that the line $TB$ is tangent to the circumscribed circle of $\triangle KBI$.
