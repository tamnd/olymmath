---
tag: A52JM2KQWF
kind: problem
type: answer
answer: m - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=85
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $m$ eine natürliche Zahl grösser als $1$. Die Folge $x_{0}, x_{1}, x_{2}, \ldots$ ist definiert durch
$$
x_{i}= \begin{cases}2^{i}, & \text{ für } 0 \leq i \leq m-1 \\ \sum_{j=1}^{m} x_{i-j} & \text{ für } i \geq m\end{cases}
$$
Finde das grösste $k$, sodass es $k$ aufeinanderfolgende Folgeglieder gibt, die alle durch $m$ teilbar sind.
