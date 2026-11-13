---
tag: CMV8SEWH8T
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the following sum, $O$ represent the digit $0 . A, B, X$ and $Y$ each represents distinct digit. How many possible digits can $A$ be?
$$
\begin{array}{r}
A O O B A O O B \\
+ B O O A B O O A \\
\hline X X O X Y X O X X
\end{array}
$$
(A) 6
(B) 7
(C) 8
(D) 9
(E) 10
