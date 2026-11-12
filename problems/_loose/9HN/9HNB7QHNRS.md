---
tag: 9HNB7QHNRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{n} \xrightarrow{p} \xi$, where $\xi, \xi_{1}, \xi_{2}, \ldots$ are random vectors in $\mathbb{R}^{d}$, and the function $\varphi=\varphi(x)$, defined on $\mathbb{R}^{d}$, is Borel measurable. Prove that

$$
D_{\varphi}=\left\{x \in \mathbb{R}^{d}: \varphi \text { is discontinuous at } x\right\} \in \mathscr{B}\left(\mathbb{R}^{d}\right),
$$

and also establish the generalized Slutsky's lemma, stating that $\varphi\left(\xi_{n}\right) \xrightarrow{p} \varphi(\xi)$, when $\mathrm{P}\left(\xi \in D_{\varphi}\right)=0$.
