---
tag: 2G74J1WYRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1988
    source: hf-numinamath-1-5
    label: XXXIX OM - I - Problem 12
---
Given are two concentric spheres $ S_R $ and $ S_r $ with radii $ R $ and $ r $, respectively, where $ R > r $. Let $ A_0 $ be a point on $ S_R $. Let $ T_{A_0} $ be the cone with vertex at $ A_0 $ and tangent to $ S_r $. Denote $ K_1 = T_{A_0} \cap S_R $. Then, for each point $ A \in K_1 $, we draw the cone $ T_A $ and define $ K_2 = \bigcup_{A\in K_1} T_A \cap S_R $, and further by induction $ K_{n+1}= \bigcup_{A\in K_n} T_A \cap S_R $, where $ T_A $ is the cone with vertex at $ A $ and tangent to $ S_r $. Prove that for some $ n $, $ K_n = S_R $.
