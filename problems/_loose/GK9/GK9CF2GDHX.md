---
tag: GK9CF2GDHX
kind: problem
type: answer
answer: a) Bottom row can be 1 0 0 or 1 0 1. b) 3. c) 4*3^2019.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=351
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
José quer preencher as casas de um tabuleiro $2 \times n$ com zeros e uns de modo que dois números vizinhos iguais, em uma mesma linha, impeçam que se preencha também com números iguais as casas correspondentes da outra linha. Por exemplo, no desenho abaixo, os valores de $A$ e $B$ não podem ser iguais.

| 0 | 1 | 0 | $\cdots$ | 1 | 1 | $\cdots$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1 | 0 | $\cdots$ | $A$ | $B$ | $\cdots$ |

a) Encontre todos os preenchimentos possíveis do tabuleiro abaixo:

| 0 | 0 | 1 |
| :--- | :--- | :--- |
| 1 | | |

b) No tabuleiro, todas as colunas já estão preenchidas, exceto as duas últimas. De quantas maneiras os números das casas $A$ e $B$ podem ser escolhidos?

| $\cdots$ | 0 | $A$ |
| :--- | :--- | :--- |
| $\cdots$ | 1 | $B$ |

c) De quantas maneiras José pode preencher o tabuleiro se $n=2020$ ?
