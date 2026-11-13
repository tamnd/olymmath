---
tag: ZGEY2X7TFG
kind: problem
type: answer
answer: 3-\frac{2}{\sqrt{n}}<3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $y=f(x)$ satisfies $\boldsymbol{a}=\left(x^{2}, y\right), \boldsymbol{b}=\left(x-\frac{1}{x},-1\right)$, and $\boldsymbol{a} \cdot \boldsymbol{b}=-1$. If there exists a positive sequence $\left\{a_{n}\right\}$ such that: $a_{1}=\frac{1}{2}, \sum_{i=1}^{n} f\left(a_{i}\right)-n=\sum_{i=1}^{n} a_{i}^{3}-n^{2} a_{n}\left(n \in \mathbf{N}^{*}\right)$.
(1) Find the general term of the sequence $\left\{a_{n}\right\}$;
(2) Prove: $\sum_{i=1}^{n} \sqrt{\left[(i+1) \cdot a_{i}\right]^{3}}<3$.
