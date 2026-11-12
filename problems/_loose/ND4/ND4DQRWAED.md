---
tag: ND4DQRWAED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bepaal het aantal verzamelingen $A=\left\{a_{1}, a_{2}, \ldots, a_{1000}\right\}$ van positieve gehele getallen met $a_{1}<a_{2}<\ldots<a_{1000} \leq 2014$, waarvoor geldt dat de verzameling

$$
S=\left\{a_{i}+a_{j} \mid 1 \leq i, j \leq 1000 \text { en } i+j \in A\right\}
$$

een deelverzameling is van $A$.
