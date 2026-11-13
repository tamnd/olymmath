---
tag: QS1VJZ6W2B
kind: problem
type: answer
answer: (4^{2017}-1)/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome
    source: hf-mathnet
    label: Spain
---
Se considera la función $f: \mathbb{N} \rightarrow \mathbb{Z}$ definida como sigue:
$$
f(n)= \begin{cases}-f\left(\frac{n}{2}\right) & \text{ si } n \text{ es par } \\ f(n-1)+1 & \text{ si } n \text{ es impar }\end{cases}
$$
para $n \geq 0$. Demostrar que $f(n)$ es múltiplo de 3 si, y sólo si, $n$ es múltiplo de 3, y hallar el menor número $n$ que cumple $f(n)=2017$.
