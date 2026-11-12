---
tag: KCP3WNSCZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Almost a golden rectangle. Consider a rectangle $R$ with sides $x$ and $y, x<y$. Suppose we remove a square with side $x$ from $R$ and obtain a rectangle $R^{\prime}$. It is known that if $R^{\prime}$ is similar to $R$, then $R$ is a "golden rectangle" and $\frac{y}{x}=\frac{1+\sqrt{5}}{2}$. However, suppose that $R^{\prime}$ is not similar to $R$. Perform the same operation on $R^{\prime}$ as on $R$, removing a square with a side equal to the smaller side of $R^{\prime}$. As a result, we obtain a rectangle $R^{\prime \prime}$. Under what conditions is $R^{\prime \prime}$ similar to $R$?
