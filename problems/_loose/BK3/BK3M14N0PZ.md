---
tag: BK3M14N0PZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a discrete random variable. Consider the following three ways of defining the median $\mu=\mu(\xi)$ of this random variable (cf. I.4.5):

(a) $\max (\mathrm{P}\{\xi>\mu\}, \mathrm{P}\{\xi<\mu\}) \leqslant 1 / 2$;

(b) $\mathrm{P}\{\xi<\mu\} \leqslant 1 / 2 \leqslant \mathrm{P}\{\xi \leqslant \mu\}$;

(c) $\mu=\inf \{x \in \mathbb{R}: \mathrm{P}\{\xi \leqslant x\} \geqslant 1 / 2\}$.

Let $M_{\mathrm{a}}, M_{\mathrm{b}}$ and $M_{\mathrm{c}}$ be the sets of medians according to each of the definitions (a), (b) and (c) respectively. What is the relationship between these sets?
