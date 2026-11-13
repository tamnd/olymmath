---
tag: TG98M7XV3N
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XV Olimpiada Matemática Rioplatense
---
Consideramos todas las sucesiones infinitas $(x_n)_{n \ge 1}$ de enteros positivos que satisfacen la recurrencia
$$
x_{n+2} = \text{mcd}(x_{n+1}, x_n) + 2006,
$$
para todo $n = 1, 2, \dots$. Aquí $\text{mcd}(u, v)$ denota el máximo común divisor de $u$ y $v$.
¿Puede ocurrir que una sucesión de este tipo contenga exactamente $10^{2006}$ números distintos?
