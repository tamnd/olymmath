---
tag: F16AHDKNB9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251031
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2015
    source: hf-mathnet
    label: Saudi Arabia SAMC 2015
---
Let $ABC$ be a triangle and $D$ a point on the side $BC$. Point $E$ is the symmetric of $D$ with respect to $AB$. Point $F$ is the symmetric of $E$ with respect to $AC$. Point $P$ is the intersection of line $DF$ with line $AC$. Prove that the quadrilateral $AEDP$ is cyclic.

(Malik Talbi)
