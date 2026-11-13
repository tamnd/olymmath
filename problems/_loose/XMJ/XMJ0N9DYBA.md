---
tag: XMJ0N9DYBA
kind: problem
type: answer
answer: Yes; cancel 1004!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2009
    source: hf-mathnet
    label: Argentina Argentina 2009
---
Sea $P$ el número que se obtiene al multiplicar los factoriales de los primeros 2008 enteros positivos:
$$
P = (1!)(2!)(3!) \ldots (2007!)(2008!)
$$

Determinar si es posible cancelar uno de estos factoriales de modo que la multiplicación de los 2007 factoriales que quedan sea un cuadrado perfecto.

**ACLARACIÓN:** El factorial de un número entero positivo es la multiplicación de todos los enteros desde 1 hasta dicho número. Por ejemplo, $5!=1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$; $12!=1 \cdot 2 \cdot 3 \cdot ... \cdot 12 = 479001600$. Un número entero se llama cuadrado perfecto si es el cuadrado de un número entero. Por ejemplo, 16 y 10000 son cuadrados perfectos, porque $16 = 4^2$ y $10000 = 100^2$.
