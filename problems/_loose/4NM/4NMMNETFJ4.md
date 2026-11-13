---
tag: 4NMMNETFJ4
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n \in \mathbf{N}$, let $S_{n}=\min \left(\sum_{\mathrm{k}=1}^{\mathrm{n}} \sqrt{(2 \mathrm{k}-1)^{2}+\mathrm{a}_{\mathrm{k}}^{2}}\right)$, where $\mathrm{a}_{1}$, $\mathrm{a}_{2}, \cdots, \mathrm{a}_{\mathrm{n}} \in \mathbf{R}^{+}, \sum_{i=1}^{n} a_{n}=17$, if there exists a unique $n$ such that $S_{n}$ is also an integer, find $n$.
