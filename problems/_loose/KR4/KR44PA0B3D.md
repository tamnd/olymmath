---
tag: KR44PA0B3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Laat $m, n$ positieve gehele getallen zijn. Bekijk een rijtje positieve gehele getallen $a_{1}$, $a_{2}, \ldots, a_{n}$ dat voldoet aan $m=a_{1} \geq a_{2} \geq \cdots \geq a_{n} \geq 1$. Voor $1 \leq i \leq m$ definiëren we

$$
b_{i}=\#\left\{j \in\{1,2, \ldots, n\}: a_{j} \geq i\right\}
$$

dus $b_{i}$ is het aantal getallen $a_{j}$ uit het rijtje waarvoor geldt $a_{j} \geq i$. Voor $1 \leq j \leq n$ definiëren we

$$
c_{j}=\#\left\{i \in\{1,2, \ldots, m\}: b_{i} \geq j\right\}
$$

dus $c_{j}$ is het aantal getallen $b_{i}$ waarvoor geldt $b_{i} \geq j$.
Voorbeeld: bij het a-rijtje 5, 3, 3, 2, 1, 1 hoort het b-rijtje 6, 4, 3, 1, 1 .
(a) Bewijs dat $a_{j}=c_{j}$ voor $1 \leq j \leq n$.
(b) Bewijs dat voor $1 \leq k \leq m$ geldt: $\sum_{i=1}^{k} b_{i}=k \cdot b_{k}+\sum_{j=b_{k}+1}^{n} a_{j}$.
