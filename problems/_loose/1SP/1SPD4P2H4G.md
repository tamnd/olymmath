---
tag: 1SPD4P2H4G
kind: problem
type: answer
answer: (n-1)^{-\frac{n-1}{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $\mathrm{n} \geq 2$, find the largest real number $\lambda$ such that for any complex numbers $\mathrm{z}_{\mathrm{k}} (1 \leq$ $\mathrm{k} \leq \mathrm{n})$ with modulus not greater than 1, we have $1+\sum_{\mathrm{k}=1}^{\mathrm{n}}\left|\sigma_{\mathrm{k}}\right| \geq \lambda\left(\sum_{\mathrm{k}=1}^{\mathrm{n}}\left|\mathrm{z}_{\mathrm{k}}\right|\right)$. Here $\sigma_{\mathrm{k}}=\sum_{1 \leq j_{1} \leqslant \mathrm{i}_{2}<\ldots<\mathrm{ik}_{\mathrm{k}} \leq \mathrm{n}} \Pi_{\mathrm{i}=1}^{\mathrm{k}} \mathrm{z}_{11} \circ$
