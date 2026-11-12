---
tag: KWA2ZN706S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Schur's Lemma.) Let $c=c(x, y)$ be a bounded Borel function on $\mathbb{R}^{2}$, and let $X, Y$ be independent random variables, $\mathrm{E} X^{2}=\mathrm{E} Y^{2}=1$. Prove that

$$
|\mathrm{E} c(X, Y) X Y|^{2} \leqslant \sup _{x} \mathrm{E}|c(x, Y)| \sup _{y} \mathrm{E}|c(X, y)|
$$
