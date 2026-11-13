---
tag: TNQPHB4Z0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=39
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2006
    source: hf-mathnet
    label: India Indija TS 2006
---
Let $A_1, A_2, A_3, \dots, A_n$ be $n$ subsets of a finite set $S$ such that $|A_j| = 8$ for each $j$, $1 \le j \le n$. For a subset $B$ of $S$, let $F(B) = \{j : 1 \le j \le n \text{ and } A_j \subset B\}$. Suppose for each subset $B$ of $S$, at least one of the following conditions holds:
(i) $|B| > 25$;
(ii) $F(B) = \emptyset$;
(iii) $\cap_{j \in F(B)} A_j \ne \emptyset$.

Prove that $A_1 \cap A_2 \cap A_3 \cap \dots \cap A_n \ne \emptyset$.
