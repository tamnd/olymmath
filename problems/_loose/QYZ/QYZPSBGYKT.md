---
tag: QYZPSBGYKT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive real number $x$, define the sequence $\left\{a_{n}\right\}$ as $a_{n}=\frac{\mathrm{e}^{2 n x}-1}{\mathrm{e}^{2 n x}+1}$. Prove: For any positive integer $n$, we have
$$
a_{1} a_{2} \cdots a_{n}>1-\frac{2}{\mathrm{e}^{2 x}} .
$$
