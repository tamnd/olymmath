---
tag: K079BKRMDT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $E$ be the set of all continuous functions $u:[0,1]\to\mathbb R$ satisfying
$$u^2(t)\le1+4\int^t_0s|u(s)|\text ds, \forall t\in[0,1].$$Let $\varphi:E\to\mathbb R$ be defined by
$$\varphi(u)=\int^1_0\left(u^2(x)-u(x)\right)\text dx.$$Prove that $\varphi$ has a maximum value and find it.
