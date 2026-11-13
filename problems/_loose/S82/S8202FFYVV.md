---
tag: S8202FFYVV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1$ and $y_1$ be positive integers satisfying $x_1 + y_1 = 2^r$, where $r$ is a positive integer. If $x_1 < y_1$, let $x_2 = 2x_1$ and $y_2 = 2^r - x_2$. On the other hand, if $x_1 > y_1$, then we let $y_2 = 2y_1$ and $x_2 = 2^r - y_2$. Apply the same procedure to $(x_2, y_2)$, and so on. Show that the procedure will end in finitely many steps, i.e. there exists a $k$ such that $x_k = y_k$. (For example, let $(x_1, y_1) = (7, 57)$, with $x_1 + y_1 = 2^6$. Then $(x_2, y_2) = (14, 50)$, $(x_3, y_3) = (28, 36)$, $(x_4, y_4) = (56, 8)$, $(x_5, y_5) = (48, 16)$, and finally $(x_6, y_6) = (32, 32)$.)
