---
tag: 35P5PBHD1S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162836
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2008
    source: hf-mathnet
    label: Slovenia Slovenija 2008
---
Prove that for any real number $x \in\left(-\frac{3 \pi}{2}, \frac{\pi}{2}\right)$ the following equality holds:

$$
\frac{2}{1-\sin x}=\tan ^{2}\left(\frac{x}{2}+\frac{\pi}{4}\right)+1
$$
