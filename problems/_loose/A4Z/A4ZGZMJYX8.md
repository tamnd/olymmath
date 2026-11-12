---
tag: A4ZGZMJYX8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1996
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
An equilateral triangle of side $n$ is divided into $n^{2}$ equilateral triangles of side 1 by lines parallel to the sides. Initially, all the sides of all the small triangles are painted blue. Three coins A, B, C are placed at vertices of the small triangles. Each coin in turn is moved a distance 1 along a blue side to an adjacent vertex. The side it moves along is painted red, so once a coin has moved along a side, the side cannot be used again. More than one coin is allowed to occupy the same vertex. The coins are moved repeatedly in the order A, B, C, A, B, C, ... Show that it is possible to paint all the sides red in this way.
