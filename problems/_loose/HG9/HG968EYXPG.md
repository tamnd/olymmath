---
tag: HG968EYXPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3278306
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2024
    source: hf-ai-mo-aops
    label: 2024 Spain Mathematical Olympiad
---
Given two points $p_1=(x_1, y_1)$ and $p_2=(x_2, y_2)$ on the plane, denote by $\mathcal{R}(p_1,p_2)$ the rectangle with sides parallel to the coordinate axes and with $p_1$ and $p_2$ as opposite corners, that is, $$\{(x,y)\in \mathbb{R}^2:\min\{x_1, x_2\}\leq x\leq \max\{x_1, x_2\},\min\{y_1, y_2\}\leq y\leq \max\{y_1, y_2\}\}.$$ Find the largest value of $k$ for which the following statement is true: for all sets $\mathcal{S}\subset\mathbb{R}^2$ with $|\mathcal{S}|=2024$ , there exist two points $p_1, p_2\in\mathcal{S}$ such that $|\mathcal{S}\cap\mathcal{R}(p_1, p_2)|\geq k$ .
