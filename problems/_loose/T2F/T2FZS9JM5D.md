---
tag: T2FZS9JM5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 58th question: Given an integer $n \geq 2$, let real numbers $a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}$ satisfy:
(1) $a_{1} \geq a_{2} \geq \cdots \geq a_{n} \geq 0, b_{1} \geq b_{2} \geq \cdots \geq b_{n} \geq 0$;
(2) $\sum_{\mathrm{i}=1}^{\mathrm{n}} \mathrm{a}_{\mathrm{i}}=\sum_{\mathrm{i}=1}^{\mathrm{n}} \mathrm{b}_{\mathrm{i}}=1$.

Find the maximum value of $\sum_{\mathrm{i}=1}^{\mathrm{n}}\left(\mathrm{a}_{\mathrm{i}}-\mathrm{b}_{\mathrm{i}}\right)^{2}$.
