---
tag: Z1E3WVY5N0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On définit une suite $\left(a_{n}\right)_{n \geqslant 0}$ ainsi : on choisit $a_{0}, a_{1} \in \mathbb{N}^{*}$, et pour tout entier $n \geqslant 0$, on pose
$$
a_{n+2}=\left\lfloor\frac{2 a_{n}}{a_{n+1}}\right\rfloor+\left\lfloor\frac{2 a_{n+1}}{a_{n}}\right\rfloor,
$$
où $\lfloor x\rfloor$ désigne le plus grand entier qui ne dépasse pas $x$. Prouver qu'il existe $m \in \mathbb{N}$ tel que $a_{m}=4$ et $a_{m+1} \in\{3,4\}$.
