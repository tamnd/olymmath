---
tag: NM95ADANC8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for all real numbers $x_{1}, x_{2}, \ldots, x_{100}$, the inequality

$$
\sum_{1 \leqslant i<j \leqslant 100} \frac{\left(x_{j}-x_{i}\right)^{2}}{j^{2}-i^{2}} \geqslant \frac{1}{101} \sum_{1 \leqslant i \leqslant 50}\left(x_{101-i}-x_{i}\right)^{2}
$$

holds.
