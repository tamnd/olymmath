---
tag: AZ1VGV87QE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87902
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
Let $z$ be a complex number such that $\arg z \in\left[\frac{\pi}{2}, \pi\right]$ and $z^{6}+z^{3}+1=0$. Determine the modulus and argument of the number $z$.

The argument of a complex number $z=|z|(\cos \varphi+i \sin \varphi)$ is the number $\arg z=\varphi$.
