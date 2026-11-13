---
tag: ZQRP8RP5ZA
kind: problem
type: answer
answer: n \sum_{i=1}^{n-1} \binom{n-1}{i} i^{n-i-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Soient $n \geqslant 2$ un entier et $X$ un ensemble à $n$ éléments. Montrer que le nombre de fonctions $f: X \rightarrow X$ telles que $f \circ f$ soit une fonction constante est égale à
$$
n \sum_{i=1}^{n-1}\binom{n-1}{i} i^{n-i-1}
$$
