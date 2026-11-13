---
tag: XZHE3A9H9G
kind: problem
type: answer
answer: 'Chest 1: nickel; Chest 2: silver; Chest 3: bronze; Chest 4: platinum; Chest 5: gold.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=337
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
Cinco peças de metal, confeccionadas, respectivamente, de ouro, prata, bronze, platina e níquel, foram colocadas em cinco cofres, numerados de $1$ a $5$. Cada cofre contém uma peça e o problema consiste em descobrir qual peça está em qual cofre. Na porta de cada cofre está escrita uma informação. Das cinco informações, quatro são falsas e a única que é verdadeira é a que aparece na porta do cofre que contém a peça de ouro. As informações nas portas dos cofres são as seguintes.

Cofre $1$: O ouro está no cofre $2$ ou $3$.
Cofre $2$: A prata está no cofre $1$.
Cofre $3$: O bronze não está aqui.
Cofre $4$: O níquel está no cofre cujo número é inferior, em uma unidade, ao que contém o ouro.
Cofre $5$: A platina está no cofre cujo número é superior, em uma unidade, ao que contém o bronze.
