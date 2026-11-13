---
tag: 3QA4J9SZRT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=45
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XII Olimpiada Matemática Rioplatense
---
En una suma hay $1669$ fracciones y los denominadores reordenan los enteros desde $1$ hasta $1669$. Si el denominador es múltiplo de $5$, entonces el numerador es $4$ y la fracción figura con signo $-$; si el denominador no es múltiplo de $5$, entonces el numerador es $1$ y la fracción figura con signo $+$:
$$
1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} - \frac{4}{5} + \dots + \frac{1}{1661} + \frac{1}{1662} + \frac{1}{1663} + \frac{1}{1664} - \frac{4}{1665} + \frac{1}{1666} + \frac{1}{1667} + \frac{1}{1668} + \frac{1}{1669}
$$
Si la suma se escribe como fracción irreducible (simplificada), demuestre que el numerador de esta fracción es divisible por $2003$.
