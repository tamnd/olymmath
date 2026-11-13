---
tag: ZR1D3MNN3T
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the polynomial $\mathrm{f}(\mathrm{x})=\mathrm{x}^{2020}+\sum_{\mathrm{i}=0}^{2019} \mathrm{c}_{\mathrm{i}} \mathrm{x}^{\mathrm{i}}\left(\mathrm{c}_{\mathrm{i}} \in\{-1,0,1\}, 0 \leq \mathrm{i} \leq 2019\right)$. Let $\mathrm{N}$ be the number of positive integer roots of $f(x)$ (including multiple roots). If the equation $f(x)$ has no negative integer roots, find the maximum value of $N$.
