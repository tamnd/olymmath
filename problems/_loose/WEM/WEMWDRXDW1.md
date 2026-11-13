---
tag: WEMWDRXDW1
kind: problem
type: answer
answer: n = 2^k for k ≥ 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=13
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $A_1 = \emptyset$, $B_1 = \{0\}$。對於所有 $n \ge 2$, 依照下面的遞迴構造：
$$
A_n = \{x + 1 \mid x \in B_{n-1}\},
$$
$$
B_n = A_{n-1} \cup B_{n-1} - A_{n-1} \cap B_{n-1},
$$
試問：有哪些 $n$ 會有 $B_n = \{0\}$？

(註：對任意集合 $A$ 和 $B$, 集合 $A - B$ 表示 $\{x \in A \mid x \notin B\}$。)
