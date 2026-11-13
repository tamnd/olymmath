---
tag: 3YCDR91EFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a complex polynomial of degree $n$
$$
f(z)=a_{n} z^{n}+\cdots+a_{1} z+a_{0}
$$

satisfying that when $|z| \leqslant 1$, $|f(z)| \leqslant 1$. Prove:
$$
\left|a_{0}\right|+\left|a_{1}\right|+\cdots+\left|a_{n}\right| \leqslant \sqrt{n} \text {. }
$$
