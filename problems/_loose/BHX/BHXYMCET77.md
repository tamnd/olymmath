---
tag: BHXYMCET77
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $\mathrm{n} \geq 3$, let $\mathcal{A}=\left\{\left\{\mathrm{z}_{1}, \mathrm{z}_{2}, \ldots, \mathrm{z}_{\mathrm{n}}\right\}\left|\mathrm{z}_{\mathrm{i}} \in \mathrm{C},\right| \mathrm{z}_{\mathrm{i}} \mid=1,1 \leq \mathrm{i} \leq \mathrm{n}\right\}$, find $\sin _{\mathrm{A} \in \mathcal{A}}\left\{\max _{\substack{\mathrm{u} \in \mathrm{C} \\|\mathrm{u}|=1}}\left\{\prod_{\mathrm{z} \in \mathrm{A}}|\mathrm{u}-\mathrm{z}|\right\}\right\}$, and determine all $\mathrm{A} \in \mathcal{A}$ for which this minimum of the maximum values can be achieved.
