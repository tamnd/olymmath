---
tag: ABGRSK6SPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, find the largest real number $\lambda=\lambda(n)$, such that for any $n$-degree polynomial with complex coefficients $\mathrm{f}(\mathrm{x})=\mathrm{a}_{\mathrm{n}} \mathrm{x}^{\mathrm{n}}+\mathrm{a}_{\mathrm{n}-1} \mathrm{x}^{\mathrm{n}-1}+\cdots+\mathrm{a}_{1} \mathrm{x}+\mathrm{a}_{0}$, and any permutation $\mathrm{x}_{0} 、 \mathrm{x}_{1} 、 \ldots 、 \mathrm{x}_{\mathrm{n}}$ of $0, 1, \ldots, n$ $\left(\mathrm{x}_{\mathrm{n}+1}=\mathrm{x}_{0}\right)$, we have $\sum_{\mathrm{k}=0}^{\mathrm{n}}\left|\mathrm{f}\left(\mathrm{x}_{\mathrm{k}}\right)-\mathrm{f}\left(\mathrm{x}_{\mathrm{k}+1}\right)\right| \geq \lambda\left|\mathrm{a}_{\mathrm{n}}\right|$.
