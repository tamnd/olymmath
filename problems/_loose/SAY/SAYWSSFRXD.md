---
tag: SAYWSSFRXD
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=331
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
a) Verifique que para qualquer inteiro positivo $a$, com $a>1$, a equação
$$
\frac{1}{x}+\frac{1}{y}=\frac{1}{a}
$$
possui pelo menos três soluções da forma $(x, y)$, com $x$ e $y$ inteiros positivos. Por exemplo, para $a=3$, os pares $(6,6),(4,12)$ e $(12,4)$ são soluções.

b) Encontre o número de pares de inteiros positivos $(x, y)$ que são soluções dessa equação quando $a=2019$.
Dica: Se a fatoração em primos do inteiro positivo $n$ é $p_{1}^{\alpha_{1}} \cdot p_{2}^{\alpha_{2}} \cdot \ldots \cdot p_{k}^{\alpha_{k}}$, então ele possui $\left(\alpha_{1}+1\right)\left(\alpha_{2}+1\right) \ldots\left(\alpha_{k}+1\right)$ divisores positivos.
