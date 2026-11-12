---
tag: FB6HG5R1TD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable, $\varphi(x)=\frac{x}{1+x}, x>0$. Prove the validity of the following inequalities:

$$
\mathrm{E}[\varphi(|X|)-\varphi(x)] \leqslant \mathrm{P}(|X| \geqslant x) \leqslant \frac{\mathrm{E} \varphi(|X|)}{\varphi(x)}
$$
