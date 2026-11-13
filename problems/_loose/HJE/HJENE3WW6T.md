---
tag: HJENE3WW6T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為某個大於 3 的整數且 $S = \{1, 2, \dots, n\}$。令 $A_1, A_2, \dots, A_n$ 為 $S$ 的子集，其中 $|A_i| \ge 2$ 對所有 $i$。假設對於任意兩個元素的子集 $S' \subseteq S$，都存在唯一的 $i$ 使得 $S' \subseteq A_i$，試證：$A_i \cap A_j \ne \emptyset$ 對於任意 $1 \le i < j \le n$。
