---
tag: FFJZGRW6KG
kind: problem
type: answer
answer: a) 34; b) 34; c) 5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Mathematical Olympiad
---
Em um tabuleiro $4 \times 4$, deve-se colocar os números de 1 a 16 nas casas, sem repetir, de forma que a soma dos números de cada linha, coluna e diagonal seja a mesma. Chamamos essa soma de Soma Mágica.

a) Qual a Soma Mágica deste tabuleiro?

b) Se a soma das casas marcadas com $X$ no tabuleiro abaixo é 34, qual a soma das casas marcadas com $Y$?

| $Y$ | | | $Y$ |
| :--- | :--- | :--- | :--- |
| | $X$ | $X$ | |
| | $X$ | $X$ | |
| $Y$ | | | $Y$ |

c) Se preenchermos com naturais consecutivos de $k$ a $(k+15)$, de forma que a Soma Mágica seja 50, qual o valor de $k$ ?
