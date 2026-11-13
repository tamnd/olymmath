---
tag: Y3KCS71J8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $A = (a_{1}, a_{2}, \ldots, a_{n})$ eine Folge ganzer Zahlen. Der Nachfolger von $A$ ist die Folge $A' = (a_{1}', a_{2}', \ldots, a_{n}')$ mit
$$
a_{k}' = \left|\{i < k \mid a_{i} < a_{k}\}\right| - \left|\{i > k \mid a_{i} > a_{k}\}\right|
$$
Sei $A_{0}$ eine endliche Folge ganzer Zahlen und für $k \geq 0$ sei $A_{k+1} = A_{k}'$ der Nachfolger von $A_{k}$. Zeige, dass eine natürliche Zahl $m$ existiert mit $A_{m} = A_{m+1}$.
