---
tag: RWEN9N1KTH
kind: problem
type: answer
answer: All pairs (a, p) with a = 3p for any prime p, together with (a, p) = (1, 3) and (17, 3).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dados dos enteros positivos $a$ y $b$, se denota por $(a \nabla b)$ el residuo que se obtiene al dividir $a$ por $b$. Este residuo es uno de los números $0, 1, \ldots, b-1$. Encuentre todas las parejas de números $(a, p)$ tales que $p$ es primo y se cumple que
$$
(a \nabla p) + (a \nabla 2p) + (a \nabla 3p) + (a \nabla 4p) = a + p.
$$
