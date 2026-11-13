---
tag: WK4MMSXY4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers of the set $\{1,2,\ldots,n\}$ are colored with $6$ colors. Let
$$S:=\{(x,y,z)\in\{1,2,\ldots,n\}^3:x+y+z\equiv0\pmod n\text{ and }x,y,z\text{ have the same color}\}$$and
$$D:=\{(x,y,z)\in\{1,2,\ldots,n\}^3:x+y+z\equiv0\pmod n\text{ and }x,y,z\text{ have three different colors}\}.$$Prove that
$$|D|\le2|S|+\frac{n^2}2.$$
