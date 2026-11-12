---
tag: ADY2FYNMG4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [71].) Let $\mathrm{P}(X \in[a, b])=1$ for some $a<0<b$. Prove that

$$
\mathrm{E} e^{X-\mathrm{E} X} \leqslant e^{\frac{(b-a)^{2}}{4}}
$$

Refine the last inequality by showing that

$$
\mathrm{E} e^{X-\mathrm{E} X} \leqslant e^{\frac{(b-a)^{2}}{8}}
$$
