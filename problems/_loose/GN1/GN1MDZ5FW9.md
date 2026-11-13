---
tag: GN1MDZ5FW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ A_1 , A_2 , \cdots , A_n $ are given subsets. Let $ S = \left\{ 1, 2, \cdots , n \right\} $. For any $ X \subset S $, let
$$ N(X)= \left\{ i \in S-X \ | \ \forall j \in X, \ A_i \cap A_j \ne \emptyset \right\} $$
Let $ m $ be an integer such that $ 3 \le m \le n-2 $. Prove that there exist $ X \subset S $ such that $ |X|=m $ and $ |N(X)| \ne 1 $.
