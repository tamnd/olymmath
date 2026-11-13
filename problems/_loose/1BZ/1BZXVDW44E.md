---
tag: 1BZXVDW44E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3293441
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54211
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2024
    source: hf-ai-mo-aops
    label: 2024 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
The points $D$ and $E$ lie on the side $(BC)$ of the triangle $ABC$ such that $D$ is between $B$ and $E.$ A point $R$ on the segment $(AE)$ is called *remarkable* if the lines $PQ$ and $BC$ are parallel, where $\{P\}=DR \cap AC$ and $\{Q\}=CR \cap AB.$ A point $R'$ on the segment $(AD)$ is called *remarkable* if the lines $P'Q'$ and $BC$ are parallel, where $\{P'\}=BR' \cap AC$ and $\{Q'\}=ER' \cap AB.$ a) If there exists a remarkable point on the segment $(AE),$ prove that any point of the segment $(AE)$ is remarkable.
b) If each of the segments $(AD)$ and $(AE)$ contains a remarkable point, prove that $BD=CE=\varphi \cdot DE,$ where $\varphi= \frac{1+\sqrt{5}}{2}$ is the golden ratio.
