---
tag: 9RWJ8N8WW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number of the form $4k+1$. Suppose that $r$ is a quadratic residue of $p$ and that $s$ is a quadratic nonresidue of $p$. Show that $p=a^{2}+b^{2}$, where $$a=\frac{1}{2}\sum^{p-1}_{i=1}\left( \frac{i(i^{2}-r)}{p}\right), b=\frac{1}{2}\sum^{p-1}_{i=1}\left( \frac{i(i^{2}-s)}{p}\right).$$ Here, $\left( \frac{k}{p}\right)$ denotes the Legendre Symbol.
