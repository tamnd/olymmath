---
tag: EYZD2ZJVV0
kind: problem
type: answer
answer: 'Roots: x0 and (x1 + x2 + ... + xn)/n'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Se suponen conocidas las raíces reales de las $n$ ecuaciones de segundo grado que se indican en el siguiente cuadro:

| Ecuación | Raíces |
| :---: | :---: |
| $x^{2}+a_{1} x+b_{1}=0$ | $x_{0}, x_{1}$ |
| $x^{2}+a_{2} x+b_{2}=0$ | $x_{0}, x_{2}$ |
| $\cdots$ | $\cdots$ |
| $x^{2}+a_{n} x+b_{n}=0$ | $x_{0}, x_{n}$ |

Encontrar, razonadamente, las raíces de la ecuación
$$
x^{2}+\frac{a_{1}+a_{2}+\cdots+a_{n}}{n} x+\frac{b_{1}+b_{2}+\cdots+b_{n}}{n}=0
$$
