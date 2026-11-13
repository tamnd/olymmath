---
tag: 8M5AGHQNJD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Q_{1}=\{x \in \mathbf{Q} \mid x \geqslant 1\}$, and the function $f: Q_{1} \rightarrow \mathbf{R}$ satisfies that for any $x, y \in Q_{1}$, the inequality $|f(x+y)-f(x)-f(y)|<\varepsilon$ holds, where $\varepsilon>0$ is a real number. Prove: there exists a real number $q$, such that for all $x \in Q_{1}$, $\left|\frac{f(x)}{x}-q\right|<2 \varepsilon$.
