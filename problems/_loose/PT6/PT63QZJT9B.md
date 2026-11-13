---
tag: PT63QZJT9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1] \rightarrow \mathbb{R}$ be an integrable function and $g: \mathbb{R} \rightarrow \mathbb{R}$ the function defined by $g(a)=\int_{0}^{1}|x-a| \cdot f(x) d x$ for any $a \in \mathbb{R}$.

(i) Show that there exists $L \geq 0$ such that $|g(a)-g(b)| \leq L \cdot|a-b|$ for any $a, b \in \mathbb{R}$.

(ii) If $f(x) \geq 0 \forall x \in[0,1]$, show that the function $g$ is convex.
