---
tag: ZVZ18PKX3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are 3 binary numbers of 7 bits:
$$
\begin{array}{lllllll}
a_{1} & a_{2} & a_{3} & a_{4} & a_{5} & a_{6} & a_{7}, \\
b_{1} & b_{2} & b_{3} & b_{4} & b_{5} & b_{6} & b_{7}, \\
c_{2} & c_{2} & c_{3} & c_{4} & c_{7} & c_{5} & c_{7},
\end{array}
$$

Prove that there exist integers $ i $ and $ j, 1 \leqslant i < j \leqslant 7 $, such that one of the following must hold:
$$
a_{i}=a_{j}=b_{i}=b_{j}, a_{i}=a_{j}=c_{i}=c_{j}, b_{i}=b_{j}=c_{i}=c_{j}
$$
