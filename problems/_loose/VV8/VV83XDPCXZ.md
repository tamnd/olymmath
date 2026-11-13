---
tag: VV83XDPCXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237387
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms
    source: hf-mathnet
    label: Greece Hellenic Mathematical Olympiad
---
Prove that there are infinite triples of positive integers $(x,y,z)$ such that
$$x^2+y^2+z^2+xy+yz+zx=6xyz.$$
