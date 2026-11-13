---
tag: D4XKQGPGR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90335
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number is written at each edge of a cube. The cube is called magic if:

(i) For every face, the four edges around it have the same sum.

(ii) For every vertex, the three edges meeting at it have the same sum. (The face and vertex sums may be different.)

Determine if there exists a magic cube using

(a) the numbers 1 through 12 , each only once;

(b) the numbers from 1 through 13, each no more than once.
