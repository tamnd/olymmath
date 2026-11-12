---
tag: WCN0CW2V6H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a random variable, the median $\mu$ of which is uniquely determined by the inequality

$$
\mathrm{P}(\xi<\mu) \leqslant \frac{1}{2} \leqslant \mathrm{P}(\xi \leqslant \mu)
$$

Show that $\mu_{n} \rightarrow \mu$ for any medians $\mu_{n}$ of random variables $\xi_{n} \xrightarrow{d} \xi$, satisfying the double inequality

$$
\mathrm{P}\left(\xi_{n}<\mu_{n}\right) \leqslant \frac{1}{2} \leqslant \mathrm{P}\left(\xi_{n} \leqslant \mu_{n}\right)
$$

Provide examples demonstrating that the last property, generally speaking, is not satisfied when $\mu$ is not uniquely defined.
