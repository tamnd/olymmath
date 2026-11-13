---
tag: 3V1BSFPH1G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbf{R}_{+} \rightarrow \mathbf{R}$ satisfy that for any $x, y \in \mathbf{R}_{+}$, we have
$$
\frac{f(\sqrt{x})+f(\sqrt{y})}{2}=f\left(\sqrt{\frac{x+y}{2}}\right) .
$$

Then for any $x_{1}, x_{2}, \cdots, x_{n} \in \mathbf{R}_{+}$, we have
$$
\frac{1}{n} \sum_{k=1}^{n} f\left(\sqrt{x_{k}}\right)=f\left(\sqrt{\frac{1}{n} \sum_{k=1}^{n} x_{k}}\right) .
$$
