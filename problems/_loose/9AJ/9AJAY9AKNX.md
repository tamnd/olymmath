---
tag: 9AJAY9AKNX
kind: problem
type: answer
answer: k·2^{k-1} + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0000.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dado un número natural $n$, se designa por $s(n)$ la suma de las cifras del número $n$, expresado en el sistema de numeración binario, es decir, el número de cifras 1 que tiene. Determinar, para todo número natural $k$
$$
\sigma(k)=s(1)+s(2)+\cdots+s\left(2^{k}\right)
$$
