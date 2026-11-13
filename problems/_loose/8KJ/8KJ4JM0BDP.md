---
tag: 8KJ4JM0BDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90416
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eight friends, Aerith, Bob, Chebyshev, Descartes, Euler, Fermat, Gauss, and Hilbert, bought tickets for adjacent seats at the opera. However when they arrived they mixed up their seats:

- Bob sat in his assigned seat,
- Chebyshev sat two seats to the right of Gauss' assigned seat,
- Descartes sat one seat to the left of Fermat's assigned seat,
- Euler sat four seats to the left of Hilbert's assigned seat,
- Fermat sat five seats to the right of Descartes' assigned seat,
- Gauss sat one to the right of Euler's assigned seat,
- Hilbert sat three seats to the left of Aerith's assigned seat.

In whose seat did Aerith sit?
