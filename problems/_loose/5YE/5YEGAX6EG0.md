---
tag: 5YEGAX6EG0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h3551232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2384
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2025
    source: hf-ai-mo-aops
    label: 2025 All-Russian Olympiad
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia LI Всероссийская математическая олимпиада школьников
---
On the sides of triangle $ ABC $, points $ D_1, D_2, E_1, E_2, F_1, F_2 $ are chosen such that when going around the triangle, the points occur in the order $ A, F_1, F_2, B, D_1, D_2, C, E_1, E_2 $. It is given that
$$
AD_1 = AD_2 = BE_1 = BE_2 = CF_1 = CF_2.
$$
Prove that the perimeters of the triangles formed by the lines $ AD_1, BE_1, CF_1 $ and $ AD_2, BE_2, CF_2 $ are equal.
