---
tag: BGH48Q4MP3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 CMIMC Geometry
    url: https://artofproblemsolving.com/community/c6h1998861
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2020
    source: hf-ai-mo-aops
    label: 2020 CMIMC Geometry
---
For every positive integer $k$ , let $\mathbf{T}_k = (k(k+1), 0)$ , and define $\mathcal{H}_k$ as the homothety centered at $\mathbf{T}_k$ with ratio $\tfrac{1}{2}$ if $k$ is odd and $\tfrac{2}{3}$ is $k$ is even. Suppose $P = (x,y)$ is a point such that $$ (\mathcal{H}_{4} \circ \mathcal{H}_{3} \circ \mathcal{H}_2 \circ \mathcal{H}_1)(P) = (20, 20). $$ What is $x+y$ ?
(A *homothety* $\mathcal{H}$ with nonzero ratio $r$ centered at a point $P$ maps each point $X$ to the point $Y$ on ray $\overrightarrow{PX}$ such that $PY = rPX$ .)
