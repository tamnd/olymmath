---
tag: BT47TH3GSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If for all coprime positive integers $m, n$, we have
$$
f(m n)=f(m) f(n) \text {, }
$$

then the function is called a multiplicative function. Given that $f: \mathbf{N} \rightarrow \mathbf{N}$ is a multiplicative function such that $f(4)=4$, and for all positive integers $m, n$, we have
$$
f\left(m^{2}+n^{2}\right)=f\left(m^{2}\right)+f\left(n^{2}\right) .
$$

Prove: For all positive integers $m$, we have
$$
f\left(m^{2}\right)=m^{2} .
$$
