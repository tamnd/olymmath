---
tag: AADVB7K124
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_i$, $y_i$, $z_i$, $w_i \in \mathbb{R}^+, i = 1, 2,\cdots n$, such that$$\sum \limits_{i=1}^nx_i=nx,\ \sum \limits_{i=1}^ny_i=ny,\ \sum \limits_{i=1}^nw_i=nw $$ $$\Gamma \left(z_i\right)\geq \Gamma \left(w_i\right),\ \sum \limits_{i=1}^n\Gamma \left(z_i\right)=n\Gamma^* (z)$$Then$$\sum \limits_{i=1}^n \frac{\left(\Gamma \left(x_i\right)+\Gamma \left(y_i\right)\right)^2}{\Gamma \left(z_i\right)-\Gamma \left(w_i\right)}\geq n\frac{\left(\Gamma \left(x\right)+\Gamma \left(y\right)\right)^2}{\Gamma^* \left(z\right)-\Gamma \left(w\right)}$$
