---
tag: 3141MVQMQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218112
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
Let $AD$, $BE$, $CF$ be the heights of triangle $ABC$ and let $K$, $L$, $M$ be the orthocenters of triangles $AEF$, $BFD$ and $CDE$, respectively. Let $G_1$ and $G_2$ denote the centroids of triangles $DEF$ and $KLM$, respectively. Show that $HG_1 = G_1G_2$, where $H$ is the orthocenter of triangle $ABC$.
