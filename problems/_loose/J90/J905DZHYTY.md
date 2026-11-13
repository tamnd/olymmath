---
tag: J905DZHYTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=172
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
É dado um quadrado $3 \times 3$ com números escritos em cada casinha $1 \times 1$. As jogadas permitidas são escolher uma linha, uma coluna ou uma diagonal e somar ou subtrair 1 dos três números que estiverem nela. Prove que não é possível começar com os números na configuração da esquerda e chegar aos números na configuração da direita após algumas operações.

| 0 | 1 | 0 |
| :--- | :--- | :--- |
| 1 | 0 | 1 |
| 0 | 1 | 0 |

| 1 | 0 | 1 |
| :--- | :--- | :--- |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
