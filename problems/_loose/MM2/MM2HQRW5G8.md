---
tag: MM2HQRW5G8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the function $\varphi(x)=\frac{1}{\left(1+x^{2}\right)^{3 / 2}}$ is a solution to the Volterra integral equation

$$
\varphi(x)=\frac{1}{1+x^{2}}-\int_{0}^{x} \frac{t}{1+x^{2}} \varphi(t) d t
$$
