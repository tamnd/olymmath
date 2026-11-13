---
tag: 80QMWVWAJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90170
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A gadget has four dials in a row, each of which can be turned to point to one of three numbers: 0 (left), 1 (up) or 2 (right). Initially the dials are in the respective positions $2,0,1,0$, so that the gadget reads "2010." You may perform the following operation: choose two adjacent dials pointing at different numbers, and turn them to point to the third number. For example, taking the first two dials, you could change "2010" to "1110." Is it possible to perform a sequence of such operations so that the gadget reads "2011"?
