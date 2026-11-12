---
tag: K5C1D3KZWZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3647991
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Define the sequence $ x_0 = 1 $, $ x_{n+1} = 3x_n - 1 $. For each positive integer $ i $, write $ i = 2^m \cdot k $ where $ k $ is odd, and define $ v_2(i) = m $. Then define the sequence $ a_i $ by:
$$
a_i = x_{v_2(i)}.
$$
For example, the first few terms of the sequence $ a_i $ are:
$$
a_1 = x_0 = 1, a_2 = x_1 = 2, a_3 = x_0 = 1, a_4 = x_2 = 5, \ldots
$$

Show that every positive integer can be written as a sum of consecutive terms of the sequence $ a_i $. (It is not necessary that the consecutive terms start from the first term, and a single term is also acceptable as a sum of consecutive terms.)
