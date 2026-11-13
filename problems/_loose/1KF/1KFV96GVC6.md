---
tag: 1KFV96GVC6
kind: problem
type: answer
answer: All positive integers divisible by 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Spain/train/0001.parquet#row=206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Hallar todos los enteros positivos $n$ para los que en cada casilla de un tablero $n \times n$ se puede escribir una de las letras I, M y O de manera que:
* en cada fila y en cada columna, un tercio de las casillas tiene I, un tercio tiene M y un tercio tiene O; y
* en cualquier línea diagonal compuesta por un número de casillas divisible por 3, exactamente un tercio de las casillas tienen I, un tercio tiene M y un tercio tiene O.
**Nota:** Las filas y las columnas del tablero $n \times n$ se numeran desde 1 hasta $n$, en su orden natural. Así, cada casilla corresponde a un par de enteros positivos $(i, j)$ con $1 \le i, j \le n$. Para $n > 1$, el tablero tiene $4n - 2$ líneas diagonales de dos tipos. Una línea diagonal del primer tipo se compone de todas las casillas $(i, j)$ para las que $i + j$ es una constante, mientras que una línea diagonal del segundo tipo se compone de todas las casillas $(i, j)$ para las que $i - j$ es una constante.
