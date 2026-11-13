---
tag: ZBMX1ER2GC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be a regular polygon with $ 4k + 1 $ sides (where $ k $ is a natural) whose vertices are $ A_1, A_2, ..., A_ {4k + 1} $ (in that order ). Each vertex $ A_j $ of $P$ is assigned a natural of the set $ \{1,2, ..., 4k + 1 \} $ such that no two vertices are assigned the same number. On $P$ the following operation is performed: Let $ B_j $ be the midpoint of the side $ A_jA_ {j + 1} $ for $ j = 1,2, ..., 4k + 1 $ (where is consider $ A_ {4k + 2} = A_1 $). If $ a $, $ b $ are the numbers assigned to $ A_ {j} $ and $ A_ {j + 1} $, respectively, the midpoint $ B_j $ is written the number $ 7a-3b $. By doing this with each of the $ 4k + 1 $ sides, the $ 4k + 1 $ vertices initially arranged are erased.

We will say that a natural $ m $ is *fatal * if for all natural $ k $ , no matter how the vertices of $P$ are initially arranged, it is impossible to obtain $ 4k + 1 $ equal numbers through a finite amount of operations from $ m $.

a) Determine if the $ 2010 $ is fatal or not. Justify.
b) Prove that there are infinite fatal numbers.
