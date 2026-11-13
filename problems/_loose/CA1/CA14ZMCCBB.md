---
tag: CA14ZMCCBB
kind: problem
type: answer
answer: "2047"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2019
    source: hf-mathnet
    label: Argentina Nacional OMA 2019
---
Sea $n$ un número natural. Definimos $f(n)$ como la cantidad de maneras de escribir $n$ como suma de potencias de 2, donde se tiene en cuenta el orden en que aparece cada término. Por ejemplo, $f(4) = 6$ pues $4$ se puede escribir como $4$; $2+2$; $2+1+1$; $1+2+1$; $1+1+2$; $1+1+1+1$.
Hallar el menor $n$ mayor que $2019$ para el que $f(n)$ es impar.
